import React from "react";
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  
  // all the info in input are sent to onSubmit
  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

// if errors object has the same name as Field component, then it gets passed down to renderInput



export default connect(null, { createStream })(StreamCreate);