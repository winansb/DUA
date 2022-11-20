import React, { Component } from 'react'
import video from './Videos.driving_sim_place_holder.mp4'

export default function VideoPage () {
  return (
    <div className="App">
    <p>hello</p>
    <video width="750" height="500" controls >
    <source src={video} type="video/mp4"/>
   </video>
    </div>
  );
}