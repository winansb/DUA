import trialDataArray from '../../../../data/TrialData';
import { handleScreenTransition } from './handleScreenTransition';
// handleScreenClose has the responsibility of coordinating the logic of a trial. Based on the many inputs from the trialData array
// as well as realtime data from the trial, this function will determine what screen to show next and when to show it.

//This variable changes how the name of the default screen is saved in the server
const defaultUI = 'DefaultUI';

export const useScreenCloser = (test, screens, setShowOverlay, trialType, nextIndex, screenName, actionName, setCurrentScreenIndex, videoWindow, dispatch) => {

  // Check if screens[nextIndex] exists if not we assume the trial is over but still say something for debugging purposes 
  if (!screens[nextIndex]) {
    // This will be the final call to this function. As such it will close the final overlay if its timer runs outs
    setShowOverlay(false); 

    // Handle transition from our last screen to our default screen 
    handleScreenTransition('continue', test, actionName, defaultUI, videoWindow, dispatch);

    console.log(`No screen found. If there should be more screens then this is an error.`);
    return;
  }

  // Find the trial with the given trialType
  const currentTrial = trialDataArray.find(trial => trial.trialType === trialType);

  if (currentTrial) {
    // Access the preTrialQuestions of the current trial
    const preTrialQuestions = currentTrial.preTrialQuestions;

    let keepLookingForScreenToShow = true;
    while (keepLookingForScreenToShow) {
      // Get the screen name of the next screen
      const nextScreenName = screens[nextIndex].screenName;

      // Find the question that pertains to the nextIndex screen
      const relatedQuestion = preTrialQuestions.find(question =>
        question.results.some(result => result.impact.screenName === nextScreenName)
      );

      if (relatedQuestion) {

        const serverName = relatedQuestion.serverName;
        const optionChosen = test[serverName];

        // Get the index of the chosen option
        const chosenIndex = relatedQuestion.options.indexOf(optionChosen);
        if (chosenIndex === -1) {
          console.error("Chosen option not found in question options");
          return;
        }

        // Find the result that matches chosenIndex
        const matchingResult = relatedQuestion.results.find(result => result.optionIndex === chosenIndex);
        
        if (matchingResult) { 
          let impact = matchingResult.impact;
        
          while (!impact.show) { // While we shouldn't show the screen
            // we don't show this screen and instead we follow the no route to the next screen in the sequence
            switch(screens[nextIndex].type) {
              case 'Information':
              case 'Notif':
              case 'Call':
                nextIndex = screens[nextIndex].nextIndex;
                break;
              case 'Prompt':
                nextIndex = screens[nextIndex].noIndex;
                break;
              default:
                console.error('Unknown screen type:', screens[nextIndex].type);
            }

            // Check if the next screen has a related question and if it should be shown
            const nextRelatedQuestion = preTrialQuestions.find(question =>
              question.results.some(result => result.impact.screenName === screens[nextIndex].screenName)
            );

            if (nextRelatedQuestion) {
              const nextChosenIndex = nextRelatedQuestion.options.indexOf(test[nextRelatedQuestion.serverName]);
              if (nextChosenIndex !== -1) {
                const nextMatchingResult = nextRelatedQuestion.results.find(result => result.optionIndex === nextChosenIndex);
                if (nextMatchingResult) {
                  impact = nextMatchingResult.impact;
                } else {
                  break; // No matching result, so we exit the loop
                }
              } else {
                break; // No chosen option, so we exit the loop
              }
            } else {
              break; // No related question, so we exit the loop
            }
          }

          if (impact.show) {
            keepLookingForScreenToShow = false;
          }
        } else {
          console.log(`No question found related to screen: ${nextScreenName}`);
          break;
        }
      } else {
        console.log(`No question found related to screen: ${nextScreenName}`);
        keepLookingForScreenToShow = false;
      }
    }
  } else {
    console.error(`No trial found for type: ${trialType}`);
  }

  // This is the mechanism that actually changes our place within our screen array
  setCurrentScreenIndex(nextIndex);

  // Query our data structure to know if we should show the next screen or not
  const currentScreen = screens.find(screen => screen.screenName === screenName);

  // If the current screen is sequential, we need to show the overlay without waiting
  if (currentScreen && currentScreen.sequential) {
    setShowOverlay(true);
    //This is the point at which our new screen is showing to the user and where we can Save the data to our server
    // Handle changing the screen to the next screen in the sequence
    handleScreenTransition('continue', test, actionName, screenName, videoWindow, dispatch);
    
  // Otherwise, we need to wait for a time based trigger before showing the next screen to the participant. This is where
  // some groups of screens could be missed if the previous screen is not closed in time.
  } else {
    setShowOverlay(false);

      // Handle changing the screen to the defaultUI when the next screen is triggered by time delay 
      handleScreenTransition('continue', test, actionName, defaultUI, videoWindow, dispatch);
      // At this point we have to wait for the overlay to be triggered by a time delay so instead we save the next screen as the default UI but follow the same pattern. 
  }


};
