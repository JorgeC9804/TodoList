import React from "react";
import './todoList.styles.css';

const Header = ({handleOption}) => {

    return (
        <div className='header'>
            <button
                onClick={() => handleOption('complete')}
            >complete</button>
            <button
                onClick={() => handleOption('incomplete')}
            >incomplete</button>
            <button
                onClick={() => handleOption('todo')}
            >todo</button>
            todoList
        </div>
    )
}

export default Header