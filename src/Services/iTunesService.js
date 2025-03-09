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

export const searchITunes = async (term, mediaType) => {
  let apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&limit=20`;
  if (mediaType !== 'all') {
    apiUrl += `&media=${mediaType}`;
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (directError) {
    console.log("Direct request error, trying JSONP:", directError);
    const data = await jsonpRequest(apiUrl);
    return data.results;
  }
};