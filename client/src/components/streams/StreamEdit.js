import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if(!this.props.streams) {
      return <div>Loading...</div>
    } 
    return (
      <div>
        <h3>Edit Stream</h3>
        {/* this.props.streams is an object with title & description */}
        {/* _.pick(object, 'prop1', 'prop2', ...) gives only desired properties mentioned */}
        <StreamForm 
          initialValues={_.pick(this.props.streams, 'title', 'description')} 
          onSubmit={this.onSubmit} 
        />
      </div>
    )
  }

}

// const StreamEdit = props => { // when page is loaded up, redux is empty
//   console.log(props); // streams is undefined because redux is empty
//   // only when user goes back to '/' does the program fetch all the streams & updates redux
//   // WE NEED TO MAKE IT SO THAT EACH COMPONENT FETECHES ITSELF AND NOT JUST '/' PAGE
//   return <div> StreamEdit </div>;
// };

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps); //state and ownProps are the same
  return { streams: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
