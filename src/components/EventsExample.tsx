import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    //!! Тип изменения react c дженериком HTMLInputElement
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }


    //! Тип нажатия react
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("drop");
        setIsDrag(true);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log("true");
        setIsDrag(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("false");
    }


    return (
        <div style={{marginBottom: '40px'}}>
            <input type="text" value={value} onChange={changeHandler} placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемыйй"/>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', backgroundColor: 'red', margin: '20px 0'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: '200px', height: '200px', backgroundColor: isDrag ? 'blue' : 'red'}}>
            </div>
        </div>
    );
};

export default EventsExample