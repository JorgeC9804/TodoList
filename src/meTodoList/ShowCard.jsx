import React from "react";
import './ShowCard.css'

const ShowCard = ({todos, handleDelete, handleStatus}) => {
    
    const { id, title, completed } = todos;

    return (
        <div className='card'>
            <div className='title'>{title}</div>
            <div className='btn-status center'>
                <button
                    onClick={() => handleStatus(id, completed)}
                    className={ completed ? 'complete btn-general' : 'incomplete btn-general' }
                >
                    { completed ? 'complete' : 'incomplete' }
                </button>
            </div>
        </div>
    )
}

export default ShowCard