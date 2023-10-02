import freecodecampImg from './assets/img/freecodecamp.png'
import { Input } from './components/Input'

function App() {
  return (
    <div id="aplicacion-tareas">
      <div id="contenedor-img-freecodecamp">
        <img src={freecodecampImg} alt="logo-freecodecamp" />
      </div>
      <Input>hola desde noteboock</Input>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

    </div>
  )
}

export default App
