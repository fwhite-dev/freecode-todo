import React from 'react'
import freecodecampImg from '../assets/img/freecodecamp.png'

export const FreecodeImg = () => {
    return (
        <div className="m-[20px] flex justify-center" id="contenedor-img-freecodecamp">
            <img className='w-[400px] h-[50px]' src={freecodecampImg} alt="logo-freecodecamp" />
        </div>
    )
}
