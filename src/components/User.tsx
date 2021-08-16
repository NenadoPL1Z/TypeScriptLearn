import React, {FC} from "react";
import {IUser} from "../types/types"
import UserItem from "./UserItem";


interface UserListProps {
    // говорит, что это будет массивом
    users: IUser[]
}


const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(item => <UserItem key={item.id} user={item}/>)}
        </div>
    )
} 

export default UserList;