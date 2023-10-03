import { FreecodeImg } from './components/FreecodeImg'
import { ListaDeTareas } from './components/ListaDeTareas'

function App() {
  return (
    <div className="flex flex-col items-center" id="aplicacion-tareas">
      <FreecodeImg />
      <div id="conteiner-lista-tareas" className='conteiner-lista-tareas'>
        <h1 className='text-[#1b1b32] text-[25px] font-Monserrat font-bold text-center my-[20px]'>
          Mis tareas
        </h1>
        <ListaDeTareas />
      </div>

    </div>
  )
}

export default App