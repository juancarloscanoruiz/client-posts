import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsView from './views/Posts';
import DetailView from './views/DetailPost';
import CreatePostView from './views/CreatePost';
import UpdatePostView from './views/UpdatePost';
import GlobalStyle from "./GlobalStyle";

function App() {

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={PostsView} />
          <Route exact path="/post/:id" component={DetailView} />
          <Route exact path="/create" component={CreatePostView} />
          <Route exact path="/update/:id" component={UpdatePostView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
