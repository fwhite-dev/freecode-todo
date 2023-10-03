import React from 'react'

export const TareaFormulario = (props) => {
    return (
        <form className='tarea-formulario'>
            <input type="text" placeholder="Escribe una tarea" name='texto' className='tarea-input' />
            <button className='tarea-boton'>Agregar</button>

        </form>
    )
}
