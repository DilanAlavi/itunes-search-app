export const jsonpRequest = (url) => {
    return new Promise((resolve) => {
      const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      const fullUrl = `${url}&callback=${callbackName}`;
      const script = document.createElement('script');
      script.src = fullUrl;
  
      window[callbackName] = (data) => {
        document.body.removeChild(script);
        delete window[callbackName];
        resolve(data);
      };
  
      document.body.appendChild(script);
    });
  };