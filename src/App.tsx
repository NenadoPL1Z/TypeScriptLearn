import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import Card, { CardVariant } from "./components/Card"
import { ITodos, IUser } from "./types/types";
import UserList from "./components/User"
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";

export default function App() {

  //! Чтобы сказать что будет в состоянии используем джинерик
  const [data, setData] = useState<IUser[]>([]);
  const [todo, setTodo] = useState<ITodos[]>([]);
  
  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      //! Говорим, что мы хотим получить от сервера 
       axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users").then(r => setData(r.data))
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchTodos() {
    try {
      //! Говорим, что мы хотим получить от сервера 
       axios.get<ITodos[]>("https://jsonplaceholder.typicode.com/todos?_limit=10").then(r => setTodo(r.data))
    } catch (e) {
      console.log(e)
    }
  }

  
  return (
    <div>
      <Card width="200px" height="200px" variant={CardVariant.primary} onClick={(num) => console.log(num)}>
        <button>Кнопка</button>
      </Card>
      <List items={data} 
      renderItems={(user: IUser) => <UserItem user={user} key={user.id} />}/>
      <List items={todo} 
      renderItems={(todo: IUser) => <UserItem user={todo} key={todo.id} />}/>
    </div>
  );
}