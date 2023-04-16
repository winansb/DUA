import Detour3Content from "./Detour3Content";
import Detour4Content from "./Detour4Content";
import Detour5Content from "./Detour5Content";
import Detour6Content from "./Detour6Content";
import Detour7Content from "./Detour7Content";
import Detour8Content from "./Detour8Content";
import Detour9Content from "./Detour9Content";
import Detour10Content from "./Detour10Content";
import DetourMap from "../../../../assets/DetourMap.png";
import WaffleHouseMap from "../../../../assets/WaffleHouseMap.png";
import HomeMap from "../../../../assets/HomeMap.png";

export const detourScreens = [
  //Detour 1
  {
    type: "Information",
    content:
      "We have detected a road blockage ahead that is preventing us from driving.",
  },
  //Detour 2
  {
    type: "Information",
    content:
      "Please stay calm and remain in side the car while we solve the issue.",
  },
  //Detour 3
  {
    type: "Prompt",
    content: <Detour3Content arrivalTime="5:30 PM" mapImage={DetourMap} />,
  },
  //Detour 4
  {
    type: "Notif",
    content: <Detour4Content arrivalTime="5:30 PM" mapImage={DetourMap} />,
  },
  //Detour 5
  {
    type: "Prompt",
    content: <Detour5Content arrivalTime="5:30 PM" mapImage={WaffleHouseMap} />,
  },
  //Detour 6
  {
    type: "Notif",
    content: <Detour6Content arrivalTime="5:30 PM" mapImage={WaffleHouseMap} />,
  },
  //Detour 7
  {
    type: "Prompt",
    content: <Detour7Content arrivalTime="5:30 PM" mapImage={HomeMap} />,
  },
  //Detour 8
  {
    type: "Notif",
    content: <Detour8Content arrivalTime="5:30 PM" mapImage={HomeMap} />,
  },
  //Detour 9
  {
    type: "Notif",
    content: <Detour9Content mapImage={DetourMap} />,
  },
  //Detour 10
  {
    type: "Prompt",
    content: <Detour10Content />,
  },
  //Detour 11
  {
    type: "Call",
  },
  //Detour 12
  {
    type: "Information",
    content:
      "The detouring issue has been resolved if you need further help, tap on the help button in the upper right corner of the screen",
  },
];
