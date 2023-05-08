const generalData = [
    {
        id: "ParticipantID",
        label: "Participant ID",
        type: "text",
        serverName: "PARTICIPANT_ID",
      },
    {
      id: "mci",
      label: "MCI",
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