import React from "react";
import '../App.css';
import addCircle from "../images/add_circle.png"
import shortid from "shortid";
import TodoItems from "./TodoItems";


const TODO_LIST_KEY = "todoapp_list"
class TodoList extends React.Component {
  state = {
    todoList: [
      {
        id: shortid.generate(),
        title: "Laundry",
        description: "your description",
        completed: true
      },
      {
        id: shortid.generate(),
        title: "Car Wash",
        description: "your description",
        completed: false
      },
      {
        id: shortid.generate(),
        title: "UPS store",
        description: "your description",
        completed: false
      }
    ],
    newToDoItemTitle: "",
    newToDoItemDescription: "",

    isTodoList: true,
  }
  componentDidMount() {
    let todoListStr = localStorage.getItem(TODO_LIST_KEY);
    if (todoListStr) {
      this.setState({
        todoList: JSON.parse(todoListStr)
      }
      )
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoList !== prevState.todList) {
      let todoListStr = JSON.stringify(this.state.todoList);
      localStorage.setItem(TODO_LIST_KEY, todoListStr);
    }

  }

  handleNewItemChangeTitle = (event) => {
    this.setState({ newToDoItemTitle: event.target.value })
  }
  handleNewItemChangeDescription = (event) => {
    this.setState({ newToDoItemDescription: event.target.value })
  }

  handleAddNewItem = () => {
    this.setState(state => {
      return {
        todoList: [...state.todoList, {
          title: this.state.newToDoItemTitle,
          description: this.state.newToDoItemDescription
        }],
        isTodoList: true,
      }
    });
  };
  handleCheckTodo = (id) => {
    this.setState((state) => {
      let newList = state.todoList.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      });
      return { todoList: newList }
    });
  };
  handleDeleteTodo = (id) => {
    this.setState((state) => {
      let filteredList = state.todoList.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      return { todoList: filteredList };
    })
  };


  render() {
    if (this.state.isTodoList) {

      return (
        <>
          <div className="todo-list">
            <h1 className="todo-list__title ">Git 'r Done</h1>
            <div className="todo-list__items">
              {this.state.todoList.map((todoItem) => {
                return (
                  <TodoItems key={todoItem.id}
                    todoItem={todoItem}
                    onCheckTodo={this.handleCheckTodo}
                    onDeleteTodo={this.handleDeleteTodo} />
                )
              })}
            </div>

            <img className="todo-list__items__add-circle" src={addCircle} onClick={() => this.setState({ isTodoList: false })}></img>
          </div>
        </>
      )
    }
    else {
      return (
        <div className="todo-list__add-item__container">
          <p className="todo-list__add-item__name">Name</p>
          <input type="text"
            onChange={this.handleNewItemChangeTitle}
            value={this.state.newToDoItemTitle} />
          <p className="todo-list__add-item__description">Description (optional)</p>
          <input type="textarea"
            onChange={this.handleNewItemChangeDescription}
            value={this.state.newToDoItemDescription} />
          <button onClick={this.handleAddNewItem} className="todolist">Save</button>
        </div>

      )
    }
  }





}

export default TodoList;