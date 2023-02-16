import React, { useRef } from "react";

function PopOut( {videoSrc} ) {
  const playerRef = useRef(null);

  const openPlayer = () => {
    const player = playerRef.current;
    const playerWindow = window.open("", "PlayerWindow", "height=500,width=500");
    playerWindow.document.body.appendChild(player);
    console.log({videoSrc})
  };

  return (
    <div className="container fit-content">
      <iframe ref={playerRef} id="startVideo" src={videoSrc}></iframe>
      <button onClick={openPlayer}>Open Player</button>
    </div>
  );
}

export default PopOut;