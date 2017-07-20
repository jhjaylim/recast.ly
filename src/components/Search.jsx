var Search = (props) => {
  
  var onClickHandler = (event) => {
    var query = document.getElementsByClassName('form-control')[0].value;
    var options = {
      'key': YOUTUBE_API_KEY,
      'maxResults': 5,
      'part': 'snippet', 
      'q': query,
      'type': 'video',
      'videoEmbeddable': 'true'
    
    };
   
    searchYouTube(options, props.handler);
  };
  
  var onKeyUpHandler = (event) => {
    
    var query = document.getElementsByClassName('form-control')[0].value;
    var options = {
      'key': YOUTUBE_API_KEY,
      'maxResults': 5,
      'part': 'snippet', 
      'q': query,
      'type': 'video',
      'videoEmbeddable': 'true'

    };
    searchYouTube(options, props.handler);
    
  };
  
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyUp = {onKeyUpHandler} />

    <button className="btn hidden-sm-down" onClick = {onClickHandler} >
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div>    
  );
 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;