import React, { useState }from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

//ReatのFunction Componentの型を定義
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text: string) =>{
    console.log(todos)
    // todos.push({id: Math.random().toString(), text: text})
    setTodos(preveTodos =>{
      return [
      ...preveTodos, {id: Math.random().toString(), text: text}
    ]})
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
