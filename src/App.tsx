import React from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

//ReatのFunction Componentの型を定義
const App: React.FC = () => {
  const todos = [{id: 't1', text: 'TSコースの完了'}]
  const todoAddHandler = (text: string) =>{
    console.log(text)
  }
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}></TodoList>
    </div>
  );
}

export default App;
