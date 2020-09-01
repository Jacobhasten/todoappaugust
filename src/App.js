import React from 'react';
import './App.css';
import addCircle from "./images/add_circle.png"
import larry from "./images/larry.jpeg"
import TodoItems from "./Components/TodoItems"
import Sidebar from "./Components/SideBar"
const user = {
  firstName: "Larry",
  lastName: "The Cable Guy",
  avatar: larry
}
const todoList = [{
  id: 1,
  title: "Laundry",
  description: "your description",
  completed: true
},
{
  id: 2,
  title: "Car Wash",
  description: "your description",
  completed: false
},
{
  id: 3,
  title: "UPS store",
  description: "your description",
  completed: false
}];

function App() {
  return (
    <div className="app-container">
      <Sidebar user={user}/>
      
      <div className="todo-list">
        <h1 className="todo-list__title ">Git 'r Done</h1>
        <div className="todo-list__items">
          {todoList.map((item) => {
            return (
              <TodoItems item={item} />
            )
          })}
        </div>
        <img className="todo-list__items__add-circle" src={addCircle}></img>
      </div>
    </div>
  );
}

export default App;
