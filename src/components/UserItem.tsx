import React, { FC } from 'react';
import { IUser } from '../types/types';


interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{margin: "20px 0"}}>
            Id: {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}. Почтовый индекс {user.address.zipcode}, e-mail: {user.email}
        </div>
    )
}

export default UserItem;