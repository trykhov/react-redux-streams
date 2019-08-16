import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

  componentDidMount() {
    this.props.fetchStreams(); // fetchStreams is an action
  }

  renderAdmin = stream => {
    if(stream.userId === this.props.currentUserId) { // if user is logged in, then there is a prop that has the property of the login ID
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <button className="ui button negative">
            Delete
          </button>
        </div>
      )
    }
  }

  renderList = () => { // returns the list of streams
    return this.props.streams.map(stream => {
      return( 
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)} {/* looks to see if stream was made by the user*/}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderCreate = () => { // allows user to create stream
    if(this.props.isSignedIn) {
      return (
        <div style={{textAlign: "right"}}>
          <Link to="/streams/create" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div> {/* shows the list of streams */}
        {this.renderCreate()} {/* the create button */}
      </div>
    ) 
  }
};

const mapStateToProps = state => {
  return { 
    streams: Object.values(state.streams), // turns values in state.streams into an array
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
   }; 
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
