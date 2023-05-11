import React from 'react';
import TrialScreenInformation from "../TrialScreenInformation";
import TrialScreenPrompt from "../TrialScreenPrompt";
import TrialScreenNotif from "../TrialScreenNotif";
import TrialScreenCall from "../TrialScreenCall";

// This component renders the current screen of the trial

// As such you can add new types of screens here

export default function TrialScreenRenderer({ setCurrentScreenIndex, currentScreen, handleScreenClose, videoWindow, targetOrigin }) {
  if (!currentScreen) return null;

  switch (currentScreen.type) {
    case "Information":
      return (
        <TrialScreenInformation
          information={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={handleScreenClose}
          nextIndex={currentScreen.nextIndex}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
        />
      );
    case "Prompt":
      return (
        <TrialScreenPrompt
          contents={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={handleScreenClose}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          yesIndex={currentScreen.yesIndex}
          noIndex={currentScreen.noIndex}
          yesDestination={currentScreen.yesDestination}
        />
      );
    case "Notif":
      return (
        <TrialScreenNotif
          contents={currentScreen.content}
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={handleScreenClose}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          nextIndex={currentScreen.nextIndex}
          okDestination={currentScreen.okDestination}
        />
      );
    case "Call":
      return (
        <TrialScreenCall
          setCurrentScreenIndex={setCurrentScreenIndex}
          onClose={handleScreenClose}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
          screenName={currentScreen.screenName}
          displayTimeSeconds={currentScreen.displayTimeSeconds}
          nextIndex={currentScreen.nextIndex}
        />
      );
    default:
      return null;
  }
}