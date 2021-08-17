import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useHistory } from 'react-router';

interface UserItemPageParams {
    id: string;
}

interface IUsetAdress {
    city: string;
    zipcode: string;
    suite: string;
}

interface IUserTest {
    name: string;
    username: string;
    address: IUsetAdress
}

const UserItemPage: FC = () => {
    
    const [data, setData] = useState<IUserTest | null>();
    const params = useParams<UserItemPageParams>();
    const history = useHistory();

    console.log(params)
    
    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
        //! Говорим, что мы хотим получить от сервера 
        axios.get<IUserTest>(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(r => setData(r.data))
        } catch (e) {
        console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push("/users")}>back</button>
            <h1>Страница пользователя {data?.name}</h1>
            <div>
                <h2>Тут должна быть инфа UserName: {data?.username};</h2>
                <h2>City: {data?.address.city}</h2>
                <h2>Zipcode: {data?.address.zipcode}</h2>
                <h2>Suite: {data?.address.suite}</h2>
            </div>
        </div>
    );
};

export default UserItemPage;