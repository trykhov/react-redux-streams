import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Header /> {/* Header must be inside BrowserRouter because of the Link inside Header */}
        <div>
          <Route path='/' component={StreamList} exact/>
          <Route path='/streams/create' component={StreamCreate} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// Client ID: 318891703291-ajp93vegeqcr91k09vtbd9133bvo299j.apps.googleusercontent.com
