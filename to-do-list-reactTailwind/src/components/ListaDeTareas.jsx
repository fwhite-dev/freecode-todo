import React from 'react'
import { TareaFormulario } from './TareaFormulario'
import { Tarea } from './Tarea'

export const ListaDeTareas = () => {
    return (
        <div >
            <TareaFormulario />
            <div className='flex flex-wrap justify-center mt-[15px]'>
                <Tarea texto='Aprender React' completado={true} />
                <Tarea texto='Aprender React' completado={true} />
                <Tarea texto='Aprender React' completado={true} />
                <Tarea texto='Aprender React' completado={true} />
                <Tarea texto='Aprender React' completado={true} />
                <Tarea texto='Aprender React' completado={true} />

            </div>
        </div>
    )
}
