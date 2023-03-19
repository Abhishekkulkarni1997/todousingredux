import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { connect } from "react-redux";

import { removeTodo } from "../action/todo";

function Todo({ todos, markComplete }) {
  console.log(todos);
  return (
    <ListGroup className="mt-5 mb-2">
      {todos &&
        todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
            <span className="float-right" onClick={() => markComplete(todo.id)}>
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
