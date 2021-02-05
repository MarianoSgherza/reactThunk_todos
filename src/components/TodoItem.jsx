import React from 'react'
const TodoItem = ({userId,id,title,completed}) => {

    
        return (
            <article>
                <p className="userId">User Id: {userId}</p>
                <p className="Id">Id: {id}</p>
                <p className="title">Título: {title}</p>
                <p className="completed">{completed && "tarea completada"}</p>
            </article>
        )

}



export default TodoItem