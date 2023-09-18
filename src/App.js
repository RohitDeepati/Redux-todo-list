import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="app">
      <header>
        <h1>What are you planning today?</h1>
      </header>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
