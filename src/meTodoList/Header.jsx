import React from 'react';
import './ShowCard.css'

const Header = ({handleChange}) => {

    return (
        <div>
            todoList <br /> 
            <button 
                className='btn-header'
                onClick={() => handleChange('todo')}>todo</button>
            <button 
                className='btn-header'
                onClick={() => handleChange('complete')}>complete</button>
            <button 
                className='btn-header'
                onClick={() => handleChange('incomplete')}>incomplete</button>
        </div>
    )
}

export default Header