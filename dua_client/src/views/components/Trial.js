import React, { useState } from "react";

function Trial( participant, column, test ) {
  const [currentVideo, setCurrentVideo] = useState("video1.mp4");
  const [interactiveContent, setInteractiveContent] = useState("content1");

  function handleInteractiveContentChange(newContent) {
    setInteractiveContent(newContent);

    setCurrentVideo("video2.mp4");
  }

  function handleVideoEnd() {
    setCurrentVideo("video3.mp4");
  }

  return (
    <>
      <Screen1 currentVideo={currentVideo} onVideoEnd={handleVideoEnd} />
      <Screen2
        interactiveContent={interactiveContent}
        onContentChange={handleInteractiveContentChange}
      />
    </>
  );
}

function Screen1({ currentVideo, onVideoEnd }) {
  return (
    <div>
      <video src={currentVideo} onEnded={onVideoEnd} controls />
    </div>
  );
}

function Screen2({ interactiveContent, onContentChange }) {
  return (
    <div>
      <p>Interactive content: {interactiveContent}</p>
      <button onClick={() => onContentChange("content2")}>
        Change interactive content
      </button>
    </div>
  );
}

export default Trial;