import React from 'react';
import { connect } from 'react-redux';


const StreamEdit = props => { // when page is loaded up, redux is empty
  console.log(props); // streams is undefined because redux is empty
  // only when user goes back to '/' does the program fetch all the streams & updates redux
  // WE NEED TO MAKE IT SO THAT EACH COMPONENT FETECHES ITSELF AND NOT JUST '/' PAGE
  return <div> StreamEdit </div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps); //state and ownProps are the same
  return { streams: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(StreamEdit);
