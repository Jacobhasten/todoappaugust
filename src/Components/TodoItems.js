import React from 'react';
import '../App.css';
import checkCircle from "../images/checkcircle.png";
import edit from "../images/edit.png";
import remove from "../images/remove_circle_24px.png";

const styles = {
    notCompletedTask: {
      textDecoration: "line-through"
    }
  }

    function TodoItems(props) {
        return (
        <div className="todo-list__items__button">
            <div className="todo-list__items__button-content">
              <input type="checkbox" checked={props.item.completed} className="todo-list__items__button-content__checkbox" src={checkCircle} />
        <p style={props.item.completed? styles.notCompletedTask: null} className="todo-list__items__button-content__title">{props.item.title}</p>
              <img className="todo-list__items__button-content__edit" src={edit}></img>
              <img className="todo-list__items__button-content__remove" src={remove}></img>
            </div>
        </div>
        )
    }
export default TodoItems