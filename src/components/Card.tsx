import React, { FC } from "react";
import { useState } from "react";

// Явно говорим, что пропс variant будет принимать CardVariant и дальше сам выбирать что ему нужно
export enum CardVariant {
    outline = 'outlined',
    primary = 'primary'
}
// Описываем какие пропсы типы пропсов будет ожидать наш компонент!
// Явно указываем, что мы ждём ширину и длинну от пропса в виде строки!
interface CardType{
    width: string,
    // Чтобы сказать, что пропс не обязательный ставим перед указанием типа вопрос
    height?: string,
    variant?: CardVariant,
    // Проврка на ребёнка
    children?: React.ReactChild | React.ReactNode,
    // Функция которая что-то принимает и ничего не возвращает
    onClick: (num: number) => void;
};
// Мы говорим, что Card это фнукциональный компонент React с обобщённым типом CardType
const Card : FC<CardType> = ({width, height, children, variant, onClick}) => {

    const [state, setState] = useState(10);

    return (
        <div style={{
        width, 
        height, 
        marginBottom: "10px", 
        border: variant === CardVariant.outline ? '1px solid lightblue' : "none",
        backgroundColor: variant === CardVariant.primary ? "lightgreen" : "none"}}
        onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
}

export default Card