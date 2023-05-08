const generalData = [
    {
      // id is the key used in the selectedOptions object and follows camelCase naming convention
      // It is important that participantID remain the same for software functionality
        id: "participantID",
      // label is the text displayed to the lab member
        label: "Participant ID",
      // type is only used for text fields to specify they are a text field the other option is a drop down menu
        type: "text",
      // serverName is the name of the field in the TEST Table of the database
        serverName: "PARTICIPANT_ID",
      },
    {
      id: "mci",
      label: "MCI",
      // We define the options for the drop down menu here
      // value will get saved to the database in the matching column under test
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],

      serverName: "MCI",
    },
    {
      id: "order",
      label: "Order",
      options: [
        { value: "Detour", label: "Detour" },
        { value: "Breakdown", label: "Breakdown" },
      ],
      serverName: "ORDER",
    },
    {
      id: "usePlaybook",
      label: "Use Playbook",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
      serverName: "USE_PLAYBOOK",
    },
  ];
  
  export default generalData;