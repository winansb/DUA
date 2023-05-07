import React from "react";
import Trial from "./components/TrialScreens/Trial";

import VehicleUI from "./screens/VehicleUIContainer";

// The reason for this TrialWrapper is that in Trial we define the return statement as a method to give all children of Trial certain exports.
// This wrapper page makes it so any pages added under this umbrella will have the tap recording functionality. It also provides some redux functionality.

function TrialWrapper(props) {
  const { participant, column, test, videoWindow, targetOrigin } = props;

  return (
    targetOrigin && (
      <Trial
        participant={participant}
        column={column}
        test={test}
        videoWindow={videoWindow}
        targetOrigin={targetOrigin}
      >
        <VehicleUI
          participant={participant}
          column={column}
          test={test}
          videoWindow={videoWindow}
          targetOrigin={targetOrigin}
        />
      </Trial>
    )
  );
}

export default TrialWrapper;
