import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';

class Users extends Component {

  render() {
    console.log('Hello!')
    return (
      <Switch>
        <Route path='/users/:profile' component={Profile}/>
      </Switch>
    )
  }
}

export default Users;