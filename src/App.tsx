import React from 'react';
import TodoList from './components/TodoList'

//ReatのFunction Componentの型を定義
const App: React.FC = () => {
  const todos = [{id: 't1', text: 'TSコースの完了'}]
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <TodoList items={todos}></TodoList>
    </div>
  );
}

export default App;
