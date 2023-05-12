import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

// Trial Videos! add here to add to the trial
import Detour_Start from "../../assets/Detour_Construction.mp4";
import Detour_Home from "../../assets/Detour_Home.mp4";
import Detour_Waffle_House from "../../assets/Detour_Waffle_House.mp4";
import Detour_Walgreen from "../../assets/Detour_Walgreen.mp4";
import Breakdown_Start from "../../assets/Breakdown_Breakdown.mp4";
import Breakdown_Not_Pull_Over from "../../assets/Breakdown_Not_Pull_Over.mp4";
import Breakdown_Pull_Over from "../../assets/Breakdown_Pull_Over.mp4";

const TrialVideo = () => {
  const [buttonText, setButtonText] = useState(
    "Please wait a moment while videos pre-load"
  );
  const [videosLoaded, setVideosLoaded] = useState(0);
  const [finalVideo, setFinalVideo] = useState(Detour_Walgreen);
  const [trialType, setTrialType] = useState(null);

  const videoPlaying = useRef(null);
  const trialStartVideo = useRef(null);
  const trialEndVideo = useRef(null);

  const numVideos = 7; // Change this number to the number of videos you have

  useEffect(() => {
    videoPlaying.current = trialStartVideo.current;
  }, []);

  const onVideoLoaded = () => {
    setVideosLoaded((prevState) => prevState + 1);
    if (videosLoaded === 7) { // Change this number to the number of videos you have
      setButtonText("Press this to fullscreen trial footage");
    }
  };

  const handleTrialStartVideoEnded = async () => {
    trialStartVideo.current.style.display = "none";
    trialEndVideo.current.style.display = "block";
    videoPlaying.current = trialEndVideo.current;

    try {
      await videoPlaying.current.requestFullscreen();
    } catch (err) {
      console.error("Failed to request fullscreen", err);
    }

    videoPlaying.current.play();
  };

  const sendRemainingTime = () => {
    const currentVideoRemaining =
      trialStartVideo.current.duration - trialStartVideo.current.currentTime;
    const nextVideoRemaining =
      trialEndVideo.current.duration - trialEndVideo.current.currentTime;

    const timeRemaining = currentVideoRemaining + nextVideoRemaining;
    console.log(timeRemaining);
    window.opener.postMessage(
      {
        action: "receiveTimeRemaining",
        timeRemaining,
      },
      "*"
    );
  };

  const sendCurrentTime = () => {
    const currentTime = videoPlaying.current.duration;
    window.opener.postMessage(
      {
        action: "receiveCurrentTime",
        currentTime,
      },
      "*"
    );
  };

  const sendCurrentVideo = () => {
    const currentVideo = videoPlaying.current;
    window.opener.postMessage(
      {
        action: "receiveCurrentVideo",
        currentVideo,
      },
      "*"
    );
  };

  const finalVideoEnded = () => {
    window.opener.postMessage(
      {
        action: "finalVideoEnded",
      },
      "*"
    );
  };

  useEffect(() => {
    function handleMessage(e) {
      const action = e.data.action;
      console.log(action);
      switch (action) {
        case "setType":
          setTrialType(e.data.trialType);
          console.log(e.data.trialType);

          // Add your starting video logic for new trials here !
          if (e.data.trialType === "Detour") {
            trialStartVideo.current.src = Detour_Start;
          } else if (e.data.trialType === "Breakdown") {
            trialStartVideo.current.src = Breakdown_Start;
          }
          break;

        case "play":
          videoPlaying.current.play();
          break;
        case "pause":
          videoPlaying.current.pause();
          break;
        case "setFinalVideo":
          console.log(e.data.finalVideo);
          setFinalVideo(e.data.finalVideo);
          break;
        case "setVideo":
          videoPlaying.current.src = e.data.video;
          break;
        case "setTime":
          videoPlaying.current.currentTime = e.data.time;
          break;
        case "getTimeRemaining":
          sendRemainingTime();
          break;
        case "getCurrentTime":
          sendCurrentTime();
          break;
        case "getCurrentVideo":
          sendCurrentVideo();
          break;
        default:
          break;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [finalVideo]);

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
        onEnded={handleTrialStartVideoEnded}
      />
      <video
        ref={trialEndVideo}
        src={finalVideo}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
        onEnded={finalVideoEnded}
      />
      <video
        src={Detour_Start}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
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
      <video
        src={Breakdown_Start}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      <video
        src={Breakdown_Not_Pull_Over}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      <video
        src={Breakdown_Pull_Over}
        onLoadedData={onVideoLoaded}
        style={{ display: "none" }}
        preload="auto"
      />
      {videosLoaded <= numVideos && (
        <FullScreenButton>
          {buttonText}
        </FullScreenButton>
      )}
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
  background-color: black;
`;

const FullScreenButton = styled.button`
  position: absolute;
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
`;
