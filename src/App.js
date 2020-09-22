import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Topbar from './pages/Topbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import ProtectedPage from './pages/Protected'


class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Topbar />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/protected" component={ProtectedPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
