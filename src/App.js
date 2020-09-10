import React from 'react';
import './App.css';
import addCircle from "./images/add_circle.png"
import larry from "./images/larry.jpeg"
import TodoItems from "./Components/TodoItems"
import Sidebar from "./Components/SideBar"

class App extends React.Component {

  state = {
    user: {
      firstName: "Larry",
      lastName: "The Cable Guy",
      avatar: larry,
    },
    todoList: [
      {
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
      }
    ],
    newToDoItemTitle: "",
    newToDoItemDescription: "",
    
  };

  handleNewItemChangeTitle = (event) =>{
    this.setState({newToDoItemTitle: event.target.value})
  }
  handleNewItemChangeDescription = (event) =>{
    this.setState({newToDoItemDescription: event.target.value})
  }

  handleAddNewItem = () => {
    this.setState(state=>{
      return{
        todoList: [...state.todoList, {title: this.state.newToDoItemTitle, 
          description: this.state.newToDoItemDescription}]
      }
    });
  };
  handleCheckTodo = (id) => {
    this.setState((state)=>{
      let newList = state.todoList.map(item=>{
        if (item.id === id) {
          return {...item, completed: !item.completed}
        }
        return item
      });
      return {todoList: newList}
    });
  };
  handleDeleteTodo = (id) => {
    this.setState((state) => {
      let filteredList = state.todoList.filter((item)=>{
        if (item.id === id) {
          return false;
        }
        return true;
      });
      return { todoList: filteredList};
    }) 
  };



  render() {
    return (
      <div className="app-container">
        <Sidebar user={this.state.user} />

        <div className="todo-list">
          <h1 className="todo-list__title ">Git 'r Done</h1>
          <div className="todo-list__items">
            {this.state.todoList.map((todoItem) => {
              return (
                <TodoItems key={todoItem.id} 
                todoItem={todoItem} 
                onCheckTodo={this.handleCheckTodo}
                onDeleteTodo={this.handleDeleteTodo}/>
              )
            })}
          </div>
          <img className="todo-list__items__add-circle" src={addCircle}></img>
          <div className="todo-list__add-item__container">
            <p>Name</p>
            <input type="text"
            onChange={this.handleNewItemChangeTitle}
            value={this.state.newToDoItemTitle}/>
            <p>Description</p>
            <input type="textarea"
            onChange={this.handleNewItemChangeDescription}
            value={this.state.newToDoItemDescription}/>
            <button onClick={this.handleAddNewItem}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
