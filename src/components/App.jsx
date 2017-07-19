class App extends React.Component {
  // this.prop.data is array of videos
  constructor(props) {
    super(props); 
  }
  render() { 
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search />
            </div>
          </div>
        </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <VideoPlayer />
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList videos={this.props.data}/>
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
