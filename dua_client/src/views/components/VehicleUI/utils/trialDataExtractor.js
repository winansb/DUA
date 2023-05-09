export const extractTrialData = (trialType, trialDataArray) => {
    if (trialType) {
      const trialData = trialDataArray.find((item) => item.trialType === trialType);
  
      if (trialData) {
        return {
          screens: trialData.screens,
          pauses: trialData.pauses,
          screenTimings: trialData.screenTimings,
        };
      } else {
        console.error(`Invalid trialType: ${trialType}`);
        return { screens: [], pauses: [], screenTimings: {} };
      }
    }
    console.error(`No trialType provided`);
    return { screens: [], pauses: [], screenTimings: {} };
  };
  