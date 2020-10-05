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
  const todoRemoveHandler = (todoId:string) => {
    setTodos(prevTodos => prevTodos.filter(todo =>todo.id !== todoId))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onRemoveTodo={todoRemoveHandler}></TodoList>
    </div>
  );
}

export default App;
