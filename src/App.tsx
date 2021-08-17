import React from "react"
import Card, { CardVariant } from "./components/Card"
import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import {BrowserRouter, Route} from "react-router-dom"
import { NavLink } from "react-router-dom";
import UserItem from "./components/UserItem";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

export default function App() {
  //! Для потвора знаний, разкоментируй
  // return (
  //   <div>
  //     <EventsExample/>
  //     <Card width="200px" height="200px" variant={CardVariant.primary} onClick={(num) => console.log(num)}>
  //       <button>Кнопка</button>
  //     </Card>
  //     <UserPage/>
  //     <TodosPage/>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div>
          <div>
            <NavLink to="/users">Пользователи</NavLink>
            <NavLink to="/todos">Список дела</NavLink>
          </div>
          <Route path="/users" exact>
            <UserPage/>
          </Route>
          <Route path="/todos" exact>
            <TodosPage/>
          </Route>
          <Route path="/user/:id" exact>
            <UserItemPage/>
          </Route>
          <Route path="/todo/:id" exact>
            <TodoItemPage/>
          </Route>
      </div>
    </BrowserRouter>
  )
}