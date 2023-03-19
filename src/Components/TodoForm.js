import React, { useState } from "react";

import { Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";

import { connect } from "react-redux";
import { addTodo } from "../action/todo";

function TodoForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      return alert("can not accept empty todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle("");
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button color="primary" onClick={handleSubmit}>
            ADD
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

const mapStateToProp = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProp, mapDispatchToProps)(TodoForm);
