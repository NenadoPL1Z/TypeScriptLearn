import React, {useState, useEffect} from 'react';
import { ITodos } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodosPage = () => {

  const [todo, setTodo] = useState<ITodos[]>([]);
  
  useEffect(() => {
    fetchTodos();
  }, [])

  async function fetchTodos() {
    try {
      //! Говорим, что мы хотим получить от сервера 
       axios.get<ITodos[]>("https://jsonplaceholder.typicode.com/todos?_limit=10").then(r => setTodo(r.data))
    } catch (e) {
      console.log(e)
    }
  }
    return (
        <List items={todo} 
      renderItems={(todo: ITodos) => <TodoItem todo={todo} key={todo.id} />}/>
    )
}

export default TodosPage;