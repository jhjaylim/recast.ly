class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selected: null
      
    };

    this.onClickSearch = (event) => {
      this.setState({
        videos: $(event)[0].items,
        selected: $(event)[0].items[0]
      });
    };
    this.onClickTitle = (video) => {
      this.setState({
        selected: video
      });
    };


  }
  componentDidMount() {
    this.props.searchYouTube({
      'key': YOUTUBE_API_KEY,
      'maxResults': 5,
      'part': 'snippet', 
      'q': '',
      'type': 'video',
      'videoEmbeddable': 'true'


    }, (event) => {
      this.setState({
        videos: $(event)[0].items,
        selected: $(event)[0].items[0]

      });

    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search handler={this.onClickSearch} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            
            <div>
              <VideoPlayer video={this.state.selected} />
              
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} handler={this.onClickTitle}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
     
  
  
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
