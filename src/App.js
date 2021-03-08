import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  //func

  return (
    <div className="App">
      <header>
        <h1>Today's Plan?</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} status={status} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
