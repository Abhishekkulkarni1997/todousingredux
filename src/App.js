import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={{ store }}>
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
