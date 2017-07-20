var searchYouTube = (options, callback) => {
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: function (data) {
      callback(data);
      console.log('Success!');
    },
    error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Error', data);
    }
  });
};

window.searchYouTube = _.debounce(searchYouTube, 500);
