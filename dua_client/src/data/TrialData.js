import Detour3Content from "../views/components/TrialScreens/Detour/Detour3Content";
import Detour4Content from "../views/components/TrialScreens/Detour/Detour4Content";
import Detour5Content from "../views/components/TrialScreens/Detour/Detour5Content";
import Detour6Content from "../views/components/TrialScreens/Detour/Detour6Content";
import Detour7Content from "../views/components/TrialScreens/Detour/Detour7Content";
import Detour8Content from "../views/components/TrialScreens/Detour/Detour8Content";
import Detour9Content from "../views/components/TrialScreens/Detour/Detour9Content";
import Detour10Content from "../views/components/TrialScreens/Detour/Detour10Content";

import Detour from "../assets/DetourMap.png";
import WaffleHouse from "../assets/WaffleHouseMap.png";
import Home from "../assets/HomeMap.png";

const trialData = {
  Detour: {
    preTrialQuestions: [
      {
        question: "Next Destination?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Detour5", show: true }, // Show Detour5 if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Detour5", show: false }, // Hide Detour5 if the lab member selects "no"
          },
        ],
        serverName: "NEXT_DESTINATION",
      },
      {
        question: "Go Home?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Detour7", show: true }, // Show Detour7 if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Detour7", show: false }, // Hide Detour7 if the lab member selects "no"
          },
        ],
        serverName: "GO_HOME",
      },
      {
        question: "Emergency Contact Detour?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Detour10", show: true }, // Show Detour10 if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Detour10", show: false }, // Hide Detour10 if the lab member selects "no"
          },
        ],
        serverName: "EMERGENCY_CONTACT_DETOUR",
      },
    ],
    screens: [
      //Detour 1
      {
        type: "Information",
        content:
          "We have detected a road blockage ahead that is preventing us from driving.",
        nextIndex: 1,
        screenName: "Detour1",
        displayTimeSeconds: 10,
        sequential: true, // Detour 2 will trigger immedietaly after Detour 1
      },
      //Detour 2
      {
        type: "Information",
        content:
          "Please stay calm and remain inside the car while we solve the issue.",
        nextIndex: 2, // Detour 3 is next
        screenName: "Detour2",
        displayTimeSeconds: 10,
        sequential: true, // Detour 3 will trigger immedietaly after Detour 2
      },
      //Detour 3
      {
        type: "Prompt",
        content: <Detour3Content arrivalTime="5:30 PM" mapImage={Detour} />,
        screenName: "Detour3",
        displayTimeSeconds: 25,
        yesIndex: 3, // Detour 4 appears
        noIndex: 4, // Detour 5 appears
        yesDestination: "walgreensDetour",
        // on Yes location becomes walgreens
        // map becomes detour map.
        //pass it a map and video to send when yes or no are selected
        sequential: true, // Detour 4 or 5 will appear directly after
      },
      //Detour 4
      {
        type: "Notif",
        content: <Detour4Content arrivalTime="5:30 PM" mapImage={Detour} />,
        screenName: "Detour4",
        displayTimeSeconds: 5,
        nextIndex: 9, //Detour 10
        sequential: true,
      },
      //Detour 5
      {
        type: "Prompt",
        content: <Detour5Content arrivalTime="5:30 PM" mapImage={WaffleHouse} />,
        screenName: "Detour5",
        displayTimeSeconds: 25,
        yesIndex: 5, // Detour 6
        noIndex: 6, // Detour 7
        yesDestination: "waffleHouse",
        sequential: true,
      },
      //Detour 6
      {
        type: "Notif",
        content: <Detour6Content arrivalTime="5:30 PM" mapImage={WaffleHouse} />,
        screenName: "Detour6",
        displayTimeSeconds: 5,
        nextIndex: 9, // Detour 10
        sequential: true,
      },
      //Detour 7
      {
        type: "Prompt",
        content: <Detour7Content arrivalTime="5:30 PM" mapImage={Home} />,
        screenName: "Detour7",
        displayTimeSeconds: 25,
        yesIndex: 7, // Detour 8
        noIndex: 8, // Detour 9
        yesDestination: "home",
        sequential: true,
      },
      //Detour 8
      {
        type: "Notif",
        content: <Detour8Content arrivalTime="5:30 PM" mapImage={Home} />,
        screenName: "Detour8",
        displayTimeSeconds: 5,
        nextIndex: 9, // Detour 10
        sequential: true,
      },
      //Detour 9
      {
        type: "Notif",
        content: <Detour9Content mapImage={Detour} />,
        screenName: "Detour9",
        displayTimeSeconds: 10,
        nextIndex: 9, // Detour 10
        okDestination: "walgreensDetour",
        sequential: true,
      },
      //Detour 10
      {
        type: "Prompt",
        content: <Detour10Content />,
        screenName: "Detour10",
        displayTimeSeconds: 10,
        yesIndex: 10, // Detour 11
        noIndex: 11, // Detour 12
        sequential: true,
      },
      //Detour 11
      {
        type: "Call",
        screenName: "Detour11",
        displayTimeSeconds: 25,
        nextIndex: 11, // Detour 12
        sequential: true,
      },
      //Detour 12
      {
        type: "Information",
        content:
          "The detouring issue has been resolved if you need further help, tap on the help button in the upper right corner of the screen",
        screenName: "Detour12",
        displayTimeSeconds: 15,
        nextIndex: 12, // end of trial next Index just needs to be something out of bounds
        sequential: true,
      },
    ],
    screenTimings: {
      // TimeinSeconds : screen index (detour1=0, detour2=1 etc. )
      // You will have to make sure that the timing of the screens works out. If the screen leading to the next group of sequential screens finished 
      // after the timer for the next group of sequential screens, the next group of sequential screens will not appear. 
      20: 0, // Detour 1 will appear 20 seconds into the trial
    },
    pauses: [
      600, // Pause the trial 0 seconds in
    ],
  },
  Breakdown: {
    preTrialQuestions: [
      {
        question: "Emergency Contact Breakdown?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Breakdown", show: true }, // Show Breakdown if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Breakdown", show: false }, // Hide Breakdown if the lab member selects "no"
          },
        ],
        serverName: "EMERGENCY_CONTACT_BREAKDOWN",
      },
      {
        question: "Call Roadside Assistance?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Breakdown", show: true }, // Show Breakdown if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Breakdown", show: false }, // Hide Breakdown if the lab member selects "no"
          },
        ],
        serverName: "ROADSIDE_ASSISTANCE",
      },
      {
        question: "Play Relaxing Music?",
        options: ["Yes", "No"],
        results: [
          {
            optionIndex: 0, // "yes"
            impact: { screenName: "Breakdown", show: true }, // Show Breakdown if the lab member selects "yes"
          },
          {
            optionIndex: 1, // "no"
            impact: { screenName: "Breakdown", show: false }, // Hide Breakdown if the lab member selects "no"
          },
        ],
        serverName: "RELAXING_MUSIC",
      },
    ],
    screens: [
      // ...breakdownScreens array content...
    ],
    screenTimings: {
      // ...breakdownScreenTimings object content...
    },
    pauses: [
      // ...breakdownPauses array content...
    ],
  },
  // newTrialType: {
  //   preTrialQuestions: [
  //     {
  //       question: "Example Question?",
  //       options: ["first", "second"],
  //       results: [
  //         {
  //           optionIndex: 0, // "first"
  //           impact: { screenName: "anyScreen", show: true }, // Show anyScreen if the lab member selects "yes"
  //         },
  //         {
  //           optionIndex: 1, // "second"
  //           impact: { screenName: "anyScreen", show: false }, // Hide anyScreen if the lab member selects "no"
  //         },
  //       ],
  //       serverName: "EXAMPLE_QUESTION",
  //     },
  //   ],
  //   screens: [
  //     //anyScreen
  //     {
  //       type: "Information", // "Information" or "Prompt" or "Notif" or "Call"
  //       content: // text you want to appear or jsx component to display
  //         "We have detected a road blockage ahead that is preventing us from driving.",
  //       nextIndex: 1,
  //       screenName: "anyScreen",
  //       displayTimeSeconds: 5,
  //     },
  //     //otherScreens
  //     {
  //       type: "Information",
  //       content:
  //         "Please stay calm and remain inside the car while we solve the issue.",
  //       nextIndex: 2, // Detour 3 is next
  //       screenName: "otherScreens",
  //       displayTimeSeconds: 5,
  //     },
  //   ],
  //   screenTimings: {
  //     // TimeinSeconds : screen index 
  //     // 23: 0,
  //     // ^^ This example shows that at 23 seconds into the trial, the screen at index 0 will be displayed
  //   },
  //   pauses: [
  //     // Time in seconds until pause triggers, can have multiple pauses
  //     //5, 10, 20
  //     // ^^ This example shows that at 5, 10, and 20 seconds into the trial, the trial will pause
  //   ],
  // },
};

const trialDataArray = Object.keys(trialData).map(trialType => {
  return { trialType, ...trialData[trialType] };
});

export default trialDataArray;

