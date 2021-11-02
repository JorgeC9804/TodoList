import React, { useState, useEffect } from "react";
import Header from "./Header";
import ShowCard from "./ShowCard";
import './ShowCard.css'

const MeTodoList = () => {

    const [todo, setTodo] = useState([]);
    const [choose, setChoose] = useState(true);
    const [chooseBetween, setChooseBetween] = useState(false);

    const jsonplaceholder = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const res = await response.json();
        const short = res.slice(0, 20);
        console.log(short);
        setTodo(short);
    }

    /*const handleDelete = id => {
        setTodo(
            todo.filter( todos => todos.id !== id )
        )
    }*/

    const handleStatus = ( id, completed ) => {
        setTodo(
            todo.map( todos => todos.id === id ? 
                {
                    ...todos,
                    completed: !completed 
                } :
                todos
            )
        )
    }

    const handleChange = (option) => {
        switch(option) {
            case 'todo':
                setChoose(true);
                break;
            case 'complete':
                setChoose(false);
                setChooseBetween(true);
                break;
            case 'incomplete':
                setChoose(false);
                setChooseBetween(false);
                break;
            default:
                setChoose(true);
        }
    }
    
    useEffect( () => {
        jsonplaceholder();
    }, [] )

    return (
        <div>
            <section className='header center'>
                <Header 
                    handleChange={handleChange} 
                /> 
            </section>
            <section className='body'>
            {
                choose ? (
                    todo.map( todos => 
                    <ShowCard 
                        key={todos.id} 
                        todos={todos} 
                        handleStatus={handleStatus}
                    /> )
                    
                ) :
                (
                    chooseBetween ? (
                        todo.map( todos => 
                            todos.completed === true ? (
                            <ShowCard 
                                key={todos.id} 
                                todos={todos} 
                                handleStatus={handleStatus}
                            />
                            ) :
                            (<>{[]}</>) 
                        )
                    ) :
                    (
                        todo.map( todos => 
                            todos.completed === false ? (
                            <ShowCard 
                                key={todos.id} 
                                todos={todos} 
                                handleStatus={handleStatus}
                            />
                            ) :
                            (<>{[]}</>) 
                        )
                    )   
                )
            }
            </section>
        </div>
    )
}

export default MeTodoList