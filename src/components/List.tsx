//! Этот компонент будет  списокм и для пользователей и для постов, для всего!
import React, { FC } from 'react';
//! <T> Говорит, что что-то может быть любым типом
interface ListProps<T> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
}
export default function List<T>(props: ListProps<T>) {
    console.log(props.items)
    return (
        <div>
            {props.items.map(props.renderItems)}
        </div>
    )
}