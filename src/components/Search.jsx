var Search = (props) => {
  
  //key AIzaSyDRKJV6nx7efJSBJhZA61RiDjCpZioGITU
  var onClickHandler = (event) => {
    
    var query = document.getElementsByClassName('form-control')[0].value;
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'key': 'AIzaSyDRKJV6nx7efJSBJhZA61RiDjCpZioGITU',
        'maxResults': 5,
        'part': 'snippet', 
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'
        
      
      },
      contentType: 'application/json',
      success: function (data) {
        props.handler(data);
        console.log('chatterbox: Message sent', $(data)[0].items);
      },
      error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });



    // fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDRKJV6nx7efJSBJhZA61RiDjCpZioGITU&part=snippet&maxResults=5&q=${query}`).then(function(response) { 
    //   return response; 
    // }).then(function(data) { 
    //   console.log(data);  
    // });
    
  };
  
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />

    <button className="btn hidden-sm-down" onClick = {onClickHandler} >
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div>    
  );
  
  
  
 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// 'https://www.googleapis.com/youtube/v3/search', {
//       method: 'GET',
//       body: {
//         'key': 'AIzaSyDRKJV6nx7efJSBJhZA61RiDjCpZioGITU',
//         'maxResults': 5,
//         'part': 'snippet', 
//         'q': query
//       }, 
           
//     }