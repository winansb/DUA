
export const SHOW_VIDEO = 'SHOW_VIDEO';
export const HIDE_VIDEO = 'HIDE_VIDEO';
export const END_TRIAL = 'END_TRIAL';
export const CHANGE_VIDEO = 'CHANGE_VIDEO';
export const PAUSE_VIDEO = 'PAUSE_VIDEO';

export const showVideo = () => {
  return {
    type: SHOW_VIDEO,
  };
};

export const hideVideo = () => {
  return {
    type: HIDE_VIDEO,
  };
};

export const endTrial = () => {
  return {
    type: END_TRIAL,
  };
};

export const changeFinalVideo = (newVideo) => {
  return {
    type: CHANGE_VIDEO,
    payload: newVideo,
  };
};

export const pauseVideo = () => {
  return {
    type: PAUSE_VIDEO,
  };
};