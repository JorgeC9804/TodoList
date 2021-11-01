import React, { useEffect, useState } from "react";
import ShowInformation from "../showInformation/ShowInformation";
import Header from "./Header";
import './todoList.styles.css';

const TodoList = () => {

    const [information, setInformation] = useState([]);
    //const [todo, setTodo] = useState([]);
    const [show, setShow] = useState(false);
    const [general, setGeneral] = useState([]);

    const handleStatus = id => {
        //ESTA FUNCION SIRVE PARA CAMBIAR DE ESTATUS

        //information.map( todo => todo.id === id ? todo.completed = !todo.completed : todo.completed )
        setInformation(
            information.map( todo => 
                todo.id === id ? 
                {
                    ...todo, //se agrega todo el objeto de esa posicion
                    completed: !todo.completed
                }
                    : 
                    todo 
                )
            /**
             * Estamos estableciendonos en la posicion del arreglo dada por el id.
             * Justo ahi estamos regresando al objeto con toda su informacion.
             * Seguido agregamos la propiedad que modifica a completed asegnandole un status inverso
             * 
             * Gracias a la regla de no aceptar mas de una propiedad con el mismo nombre en un objeto, 
             * en automatico se detecta que el objeto ya contiene un completed, asi que solo lo sustituye por el nuevo,
             * de esta forma cambia el status
             */
        )
    }

    const handleOption = (response) => {
        switch(response) {
            case 'complete':
                setShow(true);
                setGeneral(
                    information.map ( info => (
                        info.completed === true ? (
                            <ShowInformation  
                                key={info.id}
                                id={info.id}
                                title={info.title}
                                status={info.completed} 
                                handleStatus={handleStatus}
                            />
                        ) :
                        (
                            <>{[]}</>
                        )
                    ))
                );
                break;
            case 'incomplete':
                setShow(true);
                setGeneral(
                    information.map ( info => (
                        info.completed === false ? (
                            <ShowInformation  
                                key={info.id}
                                id={info.id}
                                title={info.title}
                                status={info.completed} 
                                handleStatus={handleStatus}
                            />
                        ) :
                        (
                            <>{[]}</>
                        )
                    ))
                );
                break;
            case 'todo':
                setShow(false);
                break;
            default:
                setGeneral(information);
        }
    }

    const apiRest = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        const short = result.slice(0, 20);
        setInformation(short);
        //solo obtener 20 objetos
        //console.log(result);
    };

    useEffect( () => {
        apiRest();
    }, [] )

    return (
        <section>
            <Header handleOption={handleOption} />
            <div className='struct'>
                {
                    show ? 
                    (
                        <>{general}</>
                    )
                     :
                    (
                        information && information.length > 0 && (
                            information.map ( info => (
                                <ShowInformation  
                                    key={info.id}
                                    id={info.id}
                                    title={info.title}
                                    status={info.completed} 
                                    handleStatus={handleStatus}
                                />
                            ))
                        )
                    )
                }
                
            </div>
        </section>
    )
}


export default TodoList