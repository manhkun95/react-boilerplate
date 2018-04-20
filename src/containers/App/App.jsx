import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserList from '../UserList/UserList';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={UserList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
