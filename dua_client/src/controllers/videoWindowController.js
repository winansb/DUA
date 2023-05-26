const postMessageWithResponse = (videoWindow, message) => {
    return new Promise((resolve) => {
      const messageHandler = (event) => {
        if (event.data.action === 'receive' + message.action) {
          window.removeEventListener('message', messageHandler);
          resolve(event.data);
        }
      };
  
      window.addEventListener('message', messageHandler);
  
      videoWindow.postMessage(message, '*');
    });
  };