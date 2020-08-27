import React from 'react';
import './App.css';
import hamburger from "./images/hamburger.png"
import checkCircle from "./images/checkcircle.png"
import edit from "./images/edit.png"
import remove from "./images/remove_circle_24px.png"
import addCircle from "./images/add_circle.png"
import larry from "./images/larry.jpeg"

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
      <div className="sidebar">
        <img className="sidebar__hamburger" src={hamburger}></img>
        <div className="sidebar__avatar">
          <img className="sidebar__avatar-img" src={larry} />
          <p className="sidebar__avatar-name"> Larry The Cable Guy</p>
        </div>
        <h3>Git 'r Done</h3>
        <h3>Dashboard</h3>
        <h3>Games</h3>
      </div>
      <div className="todo-list">
        <h1 className="todo-list__title ">Git 'r Done</h1>
        <div className="todo-list__items">
        {todoList.map((item) => {
          return(
          <div className="todo-list__items__button">
           
            <div className="todo-list__items__button-content">
              <input type="checkbox" checked={item.completed} className="todo-list__items__button-content__checkbox" src={checkCircle} />
        <p className="todo-list__items__button-content__title">{item.title}</p>
              <img className="todo-list__items__button-content__edit" src={edit}></img>
              <img className="todo-list__items__button-content__remove" src={remove}></img>
            </div>
        </div>
        )})}
          

        </div>
        <img className="todo-list__items__add-circle" src={addCircle}></img>
      </div>
    </div>
  );
}

export default App;
