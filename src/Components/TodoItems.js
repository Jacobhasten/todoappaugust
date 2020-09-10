import React from 'react';
import '../App.css';
import checkCircle from "../images/checkcircle.png";

const styles = {
    notCompletedTask: {
      textDecoration: "line-through"
    }
  }

    function TodoItems(props) {
      const handleCheckTodo = () => props.onCheckTodo(props.todoItem.id)
      const handleDeleteTodo = () => props.onDeleteTodo(props.todoItem.id)
        return (
        <div className="todo-list__items__button">
            <div className="todo-list__items__button-content">
              <input type="checkbox" 
              defaultChecked={props.todoItem.completed} 
              onChange={handleCheckTodo}
              className="todo-list__items__button-content__checkbox" 
              src={checkCircle} />
        <p style={props.todoItem.completed? styles.notCompletedTask: null} 
        className="todo-list__items__button-content__title">{props.todoItem.title}</p>
              <button className="todo-list__items__button-content__edit"/>
              <button onClick={handleDeleteTodo} className="todo-list__items__button-content__remove"/>
            </div>
        </div>
        )
    }
export default TodoItems