import React from "react";
import './ShowInformation.styles.css';

const ShowInformation = ({id, title, status, handleStatus}) => {
    return (
        <div className= { status ? 'information-box inf-box-true' : 'information-box inf-box-false' }>
            <div className='title'>{title}</div>
            <section className='btn'>
                <button
                    onClick={() => handleStatus(id)}
                    className={ status ? 'btn-green btn-general' : 'btn-red btn-general' } 
                >
                    { status ? 'complete' : 'incomplete' }
                </button>
            </section>
            
        </div>
    )
}

export default ShowInformation