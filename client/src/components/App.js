import React from 'react';
import { Router, Route} from 'react-router-dom'; // change Browswer Route to Router due to import history
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'; // need to change BrowseraRouter to just Router

const App = () => {
  return(
    <div>
      <Router history={history}>
        <Header /> {/* Header must be inside BrowserRouter because of the Link inside Header */}
        <div>
          <Route path='/' component={StreamList} exact/>
          <Route path='/streams/create' component={StreamCreate} />
          <Route path='/streams/delete' component={StreamDelete} />
          {/* can have multiple params (wildcard) /edit/:id/:<variable> */}
          <Route path='/streams/edit/:id' component={StreamEdit} /> {/* any value after edit/ allows for user to go to that page */}
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;

// Client ID: 318891703291-ajp93vegeqcr91k09vtbd9133bvo299j.apps.googleusercontent.com
