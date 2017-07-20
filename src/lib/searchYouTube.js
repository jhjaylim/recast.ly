var searchYouTube = (options, callback) => {
    
  // var options = options.map(function(ops){

  //   q: ops.query, 
  //   max: ops.maxResult

  // });
  
  
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: function (data) {
      callback(data);
      console.log('Success!', $(data)[0].items);
    },
    error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Error', data);
    }
  });
};

window.searchYouTube = searchYouTube;
