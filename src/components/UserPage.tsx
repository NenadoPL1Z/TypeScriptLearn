import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';
import { useHistory } from 'react-router';

const UserPage: FC = () => {
    const [data, setData] = useState<IUser[]>([]);
    const history = useHistory();
    
    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
        //! Говорим, что мы хотим получить от сервера 
        axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users").then(r => setData(r.data))
        } catch (e) {
        console.log(e)
        }
    }
    return (
        <List items={data} 
        renderItems={(user: IUser) => <UserItem onClick={() => history.push(`/user/${user.id}`)} user={user} key={user.id} />}/>
    )
}

export default UserPage;