import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Detour_Start from "../assets/Detour_Construction.mp4";
import Detour_Home from "../assets/Detour_Home.mp4";
import Detour_Waffle_House from "../assets/Detour_Waffle_House.mp4";
import Detour_Walgreen from "../assets/Detour_Walgreen.mp4";

const TrialVideo = () => {
  const [buttonText, setButtonText] = useState(
    "Please wait a moment while videos pre-load"
  );
  const [videosLoaded, setVideosLoaded] = useState(0);

  const videoPlaying = useRef(null);
  const trialStartVideo = useRef(null);
  const trialEndVideo = useRef(null);

  useEffect(() => {
    videoPlaying.current = trialStartVideo.current;
  }, []);

  const onVideoLoaded = () => {
    setVideosLoaded((prevState) => prevState + 1);
    if (videosLoaded === 3) {
      setButtonText("Press this to fullscreen trial footage");
    }
  };

  useEffect(() => {
    function handleMessage(e) {
      const action = e.data.action;

      switch (action) {
        case "play":
          videoPlaying.current.play();
          break;
        case "pause":
          videoPlaying.current.pause();
          break;
        case "setFinalVideo":
          trialEndVideo.current.src = e.data.finalVideo;
          break;
        case "setVideo":
          videoPlaying.current.src = e.data.video;
          break;
        case "setTime":
          videoPlaying.current.currentTime = e.data.time;
          break;
        default:
          break;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleFullscreen = async () => {
    console.log(videosLoaded);
    if (videosLoaded < 3) return;

    try {
      await videoPlaying.current.requestFullscreen();
    } catch (err) {
      console.error("Failed to request fullscreen", err);
    }
  };

  return (
    <VideoWrapper>
      <video
        ref={trialStartVideo}
        src={Detour_Start}
        onLoadedData={onVideoLoaded}
      />
      <video
        ref={trialEndVideo}
        src=""
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
      />
      <video
        src={Detour_Home}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      <video
        src={Detour_Waffle_House}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      <video
        src={Detour_Walgreen}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      <FullScreenButton onClick={handleFullscreen}>
        {buttonText}
      </FullScreenButton>
    </VideoWrapper>
  );
};

export default TrialVideo;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const FullScreenButton = styled.button`
  position: absolute;
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
`;
