import React, { useState } from 'react'
import '../css/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = (props) => {
    const [input, setInput] = useState("")

    const manejarEnvio = e => {
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        setInput("")
        props.onsubmit(tareaNueva)
    }

    return (
        <form
            onSubmit={manejarEnvio}
            className='tarea-formulario'
        >
            <input
                className='tarea-input'
                placeholder='Escriba la tarea'
                name='tarea'
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;