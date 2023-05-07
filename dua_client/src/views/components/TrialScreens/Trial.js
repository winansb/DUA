import React, { useEffect, useState, useRef } from "react";
import { createTap, updateTap } from "../../../redux/actions/tapActions";
import { useDispatch } from "react-redux";

function Trial({
  participant,
  column,
  test,
  children,
  videoWindow,
  targetOrigin,
}) {
  const [currentTargetOrigin, setCurrentTargetOrigin] = useState(targetOrigin);

  const screenTapCounter = useRef(1);
  const trialStartTime = useRef(null);
  const [touchStartEvent, setTouchStartEvent] = useState(null);
  const [actionInitiated, setActionInitiated] = useState("");
  const touchStartTime = useRef(null);

  const dispatch = useDispatch();

  const handleTouchStart = () => {
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e) => {
    const press_end = Date.now();
    const press_duration_ms = press_end - touchStartTime.current;

    const tap_on_screen_number = screenTapCounter.current;
    const screen_name = " ";
    const screen_seq = " ";
    const trial_runtime_ms = Date.now() - trialStartTime.current;

    const x = e.changedTouches[0].clientX;
    const y = e.changedTouches[0].clientY;

    const tapData = {
      trial_id: test.UID,
      tap_on_screen_number: tap_on_screen_number,
      screen_name: screen_name,
      screen_seq: screen_seq,
      trial_runtime_ms: trial_runtime_ms,
      press_start: new Date(touchStartTime.current).toISOString(),
      press_end: new Date(press_end).toISOString(),
      press_duration_ms: press_duration_ms,
      action_initiated: actionInitiated,
      press_location_x_pixels: x,
      press_location_y_pixels: y,
    };

    dispatch(createTap(tapData));

    screenTapCounter.current++;
  };

  useEffect(() => {
    trialStartTime.current = Date.now();
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartEvent]);

  useEffect(() => {
    const handleButtonClicked = (e) => {
      setActionInitiated(e.detail);
    };

    window.addEventListener("buttonClicked", handleButtonClicked);

    return () => {
      window.removeEventListener("buttonClicked", handleButtonClicked);
    };
  }, []);

  useEffect(() => {
    setCurrentTargetOrigin(targetOrigin);
  }, [targetOrigin]);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          videoWindow,
          targetOrigin,
          participant,
          test,
          column,
          actionInitiated,
        })
      )}
    </>
  );
}

export default Trial;
