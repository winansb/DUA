import Detour3Content from "./Detour3Content";
import Detour4Content from "./Detour4Content";
import Detour5Content from "./Detour5Content";
import Detour6Content from "./Detour6Content";
import Detour7Content from "./Detour7Content";
import Detour8Content from "./Detour8Content";
import Detour9Content from "./Detour9Content";
import Detour10Content from "./Detour10Content";

import Detour from "../../../../assets/DetourMap.png";
import WaffleHouse from "../../../../assets/WaffleHouseMap.png";
import Home from "../../../../assets/HomeMap.png";

export const detourScreens = [
  //Detour 1
  {
    type: "Information",
    content:
      "We have detected a road blockage ahead that is preventing us from driving.",
    Ok: 1,
    screenName: "Detour1",
    displayTimeSeconds: 5,
  },
  //Detour 2
  {
    type: "Information",
    content:
      "Please stay calm and remain inside the car while we solve the issue.",
    Ok: 2, // Detour 3 is next
    screenName: "Detour2",
    displayTimeSeconds: 5,
  },
  //Detour 3
  {
    type: "Prompt",
    content: <Detour3Content arrivalTime="5:30 PM" mapImage={Detour} />,
    screenName: "Detour3",
    displayTimeSeconds: 5,
    yesIndex: 3, // Detour 4 appears
    noIndex: 4, // Detour 5 appears
    yesDestination: "walgreensDetour",
    // on Yes location becomes walgreens
    // map becomes detour map.
    //pass it a map and video to send when yes or no are selected
  },
  //Detour 4
  {
    type: "Notif",
    content: <Detour4Content arrivalTime="5:30 PM" mapImage={Detour} />,
    screenName: "Detour4",
    displayTimeSeconds: 5,
    nextIndex: 9, //Detour 10
  },
  //Detour 5
  {
    type: "Prompt",
    content: <Detour5Content arrivalTime="5:30 PM" mapImage={WaffleHouse} />,
    screenName: "Detour5",
    displayTimeSeconds: 5,
    yesIndex: 5, // Detour 6
    noIndex: 6, // Detour 7
    yesDestination: "waffleHouse",
  },
  //Detour 6
  {
    type: "Notif",
    content: <Detour6Content arrivalTime="5:30 PM" mapImage={WaffleHouse} />,
    screenName: "Detour6",
    displayTimeSeconds: 5,
    nextIndex: 9, // Detour 10
  },
  //Detour 7
  {
    type: "Prompt",
    content: <Detour7Content arrivalTime="5:30 PM" mapImage={Home} />,
    screenName: "Detour7",
    displayTimeSeconds: 5,
    yesIndex: 7, // Detour 8
    noIndex: 8, // Detour 9
    yesDestination: "home",
  },
  //Detour 8
  {
    type: "Notif",
    content: <Detour8Content arrivalTime="5:30 PM" mapImage={Home} />,
    screenName: "Detour8",
    displayTimeSeconds: 5,
    nextIndex: 9, // Detour 10
  },
  //Detour 9
  {
    type: "Notif",
    content: <Detour9Content mapImage={Detour} />,
    screenName: "Detour9",
    displayTimeSeconds: 5,
    nextIndex: 9, // Detour 10
    okDestination: "walgreensDetour",
  },
  //Detour 10
  {
    type: "Prompt",
    content: <Detour10Content />,
    screenName: "Detour10",
    displayTimeSeconds: 5,
    yesIndex: 10, // Detour 11
    noIndex: 11, // Detour 12
  },
  //Detour 11
  {
    type: "Call",
    screenName: "Detour11",
    displayTimeSeconds: 5,
    nextIndex: 11, // Detour 12
  },
  //Detour 12
  {
    type: "Information",
    content:
      "The detouring issue has been resolved if you need further help, tap on the help button in the upper right corner of the screen",
    screenName: "Detour12",
    displayTimeSeconds: 5,
    nextIndex: 12, // end of trial next Index just needs to be something out of bounds
  },
  {
    Type: "End Trial",
  },
];

// D1 1:15, D2: 1:30, D3: 1:45, D5: 2:00, D7: 2:15, D9: 2:30, D10: 2:45 D12: 3:00
export const detourScreenTimings = [75, 90, 105, 115, 130, 145, 160, 175];

// Pause at 5 seconds, 10 seconds, and 12 seconds
export const detourPauses = [5, 5, 2];
