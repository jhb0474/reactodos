import logo from './logo.svg';
import './App.css';
import ToDoInsert from './components/ToDoInsert';
import ToDoItem from './components/ToDoItem';
import ToDoButton from './components/ToDoButton';
import { useCallback, useState } from 'react';


function App() {
  const todos = [
    "밥 먹기",
    "과제 하기",
    "ㅠㅠ ㅠㅠㅠ"
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <ToDoInsert></ToDoInsert>
        <ul>
          {todos.map(function(item){
            return <ToDoItem item={item}  />
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
