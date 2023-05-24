import React from 'react';
import TrialScreenInformation from "../TrialScreenInformation";
import TrialScreenPrompt from "../TrialScreenPrompt";
import TrialScreenNotif from "../TrialScreenNotif";
import TrialScreenCall from "../TrialScreenCall";

// This component renders the current screen of the trial

// As such you can add new types of screens here

export default function TrialScreenRenderer({ test, screens, setShowOverlay, trialType, setCurrentScreenIndex, currentScreen, useScreenCloser, videoWindow, targetOrigin, dispatch }) {
  if (!currentScreen) return null;

  switch (currentScreen.type) {
    case "Information":
      return (
        <TrialScreenInformation
        // The key value is not used in file but is important for proper rendering
          key={currentScreen.screenName}
          test= {test}
          screens={screens}
          setShowOverlay={setShowOverlay}
          trialType={trialType}
          information={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={useScreenCloser}
          nextIndex={currentScreen.nextIndex}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          dispatch={dispatch}
        />
      );
    case "Prompt":
      return (
        <TrialScreenPrompt
          key={currentScreen.screenName}
          test= {test}
          screens={screens}
          setShowOverlay={setShowOverlay}
          trialType={trialType}
          contents={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={useScreenCloser}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          yesIndex={currentScreen.yesIndex}
          noIndex={currentScreen.noIndex}
          yesDestination={currentScreen.yesDestination}
          dispatch={dispatch}
        />
      );
    case "Notif":
      return (
        <TrialScreenNotif
          key={currentScreen.screenName}
          test= {test}
          screens={screens}
          setShowOverlay={setShowOverlay}
          trialType={trialType}
          contents={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={useScreenCloser}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          nextIndex={currentScreen.nextIndex}
          okDestination={currentScreen.okDestination}
          dispatch={dispatch}
        />
      );
    case "Call":
      return (
        <TrialScreenCall
          key={currentScreen.screenName}
          test= {test}
          screens={screens}
          setShowOverlay={setShowOverlay}
          trialType={trialType}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={useScreenCloser}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          nextIndex={currentScreen.nextIndex}
          dispatch={dispatch}
        />
      );
    default:
      return null;
  }
}