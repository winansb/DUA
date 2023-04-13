import React from "react";
import Trial from "./components/Trial";
import Detour0 from "../components/Tests/Detour/Detour0";
import Detour1 from "../components/Tests/Detour/Detour1";
import Detour2 from "../components/Tests/Detour/Detour2";
import Detour3 from "../components/Tests/Detour/Detour3";
import Detour4 from "../components/Tests/Detour/Detour4";
import Detour5 from "../components/Tests/Detour/Detour5";
import Detour6 from "../components/Tests/Detour/Detour6";
import Detour7 from "../components/Tests/Detour/Detour7";
import Detour8 from "../components/Tests/Detour/Detour8";
import Detour9 from "../components/Tests/Detour/Detour9";
import Detour10 from "../components/Tests/Detour/Detour10";

// The reason for this TrialWrapper is that in Trial we define the return statement as a method to give all children of Trial certain exports. 
// This wrapper page makes it so any new page added under the Trial Wrapper will have access to the participant, column (used to determine curent test)
// and current test profile. It also makes functions for interacting with the video page readily available within each function. 

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
            <Detour0 />
            <Detour1 />
            <Detour2 />
            <Detour3 />
            <Detour4 />
            <Detour5 />
            <Detour6 />
            <Detour7 />
            <Detour8 />
            <Detour9 />
            <Detour10 />
        </Trial>
        )
    );
  }
  
  export default TrialWrapper;