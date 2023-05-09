import { useEffect } from 'react';

// Trial Videos Add new videos here to add to trial 
import Detour_Home from "../../../../assets/Detour_Home.mp4"
import Detour_Waffle_House from "../../../../assets/Detour_Waffle_House.mp4";
import Detour_Walgreen from "../../../../assets/Detour_Walgreen.mp4";
import Breakdown_Start from "../../../../assets/Breakdown_Breakdown.mp4";
import Breakdown_Not_Pull_Over from "../../../../assets/Breakdown_Not_Pull_Over.mp4";
import Breakdown_Pull_Over from "../../../../assets/Breakdown_Pull_Over.mp4";


// This Destination Handler is responsible for changing the video in the video window
// as the destination object is changed in the redux store. 
export const useDestinationHandler = (destination, videoWindow, targetOrigin) => {
  useEffect(() => {
    if (destination) {
      console.log(destination);

      const videoSrcMap = {
        walgreens: Detour_Walgreen,
        walgreensDetour: Detour_Walgreen,
        waffleHouse: Detour_Waffle_House,
        home: Detour_Home,

        breakdown: Breakdown_Start,
        breakdownPullOver: Breakdown_Pull_Over,
        breakdownNotPullOver: Breakdown_Not_Pull_Over,
      };

      const finalVideoSrc = videoSrcMap[destination];

      if (!finalVideoSrc) {
        console.warn(`Unknown destination: ${destination}`);
        return;
      }

      videoWindow.postMessage(
        {
          action: "setFinalVideo",
          finalVideo: finalVideoSrc,
        },
        targetOrigin || "*"
      );
    }
  }, [destination, videoWindow, targetOrigin]);
};
