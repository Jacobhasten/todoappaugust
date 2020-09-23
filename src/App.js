import React from 'react';
import './App.css';
import larry from "./images/larry.jpeg"
import TodoList from './Components/TodoList'
import Dashboard from './Components/Dashboard'
import Sidebar from "./Components/SideBar"
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: {
      firstName: "Larry",
      lastName: "The Cable Guy",
      avatar: larry,
    }
  };

 



    render() {
      return (
        <div className="app-container">
          <Sidebar user={this.state.user} />
          <Switch>
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route path="/todos">
              <TodoList/>
            </Route>
          </Switch>
        </div>
      );
    }
  }

  export default App;
