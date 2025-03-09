export const jsonpRequest = (url) => {
    return new Promise((resolve, reject) => {
      const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
      const fullUrl = `${url}&callback=${callbackName}`;
      const script = document.createElement('script');
      script.src = fullUrl;
  
      window[callbackName] = (data) => {
        document.body.removeChild(script);
        delete window[callbackName];
        resolve(data);
      };
  
      script.onerror = () => {
        document.body.removeChild(script);
        delete window[callbackName];
        reject(new Error('JSONP request error'));
      };
  
      document.body.appendChild(script);
    });
  };

  export const searchITunes = async (term) => {
    const apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  };