export const jsonpRequest = (url, callback) => {
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    const fullUrl = `${url}&callback=${callbackName}`;
    const script = document.createElement('script');
    script.src = fullUrl;
  
    window[callbackName] = (data) => {
      callback(data);
    };
  
    document.body.appendChild(script);
  };