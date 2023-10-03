import React from 'react'
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";


export const Tarea = ({ texto, completado }) => {
    return (
        <div id='contenedor-tarea' className={completado ? "contenedor-tarea bg-indigo-500 line-through" : "contenedor-tarea"}>
            <div id='texto-tarea' className='w-full h-full text-[20px] flex items-center'>
                {texto}
            </div>
            <AiOutlineCheckSquare className='w-[25px] h-[25px] m-[5px ]' />
            <AiOutlineCloseSquare className='w-[25px] h-[25px] m-[5px ]' />
        </div>
    )
}
