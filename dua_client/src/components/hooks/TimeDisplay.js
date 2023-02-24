import React, { useState, useEffect } from 'react';

export function getCurrentTime() {

    const dateOptions = { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
    
    const now = new Date(); 
    
    const date = now.toLocaleDateString('en-US', dateOptions);

    const hours = now.getHours().toString().padStart(2,'0'); 
    const minutes = now.getMinutes().toString().padStart(2,'0'); 
    const seconds = now.getSeconds().toString().padStart(2,'0'); 

    return `${date}`; 
}

export function getTimeLeft(props) {
  
}
