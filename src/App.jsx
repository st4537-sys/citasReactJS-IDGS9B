import { useState } from 'react';
import Formulario from './components/Formulario.jsx';
import './css/main.css';

function App () {

  const [modalVisible, setModalVisible] = useState(false)
  return (
    <main className= "container">
      <h1 className='titulo'>
        Administador de Citas <span className ='titulo-bold'>Veterinario</span>
      </h1>
      <button className='btn-nueva-cita' 
      onClick={() => setModalVisible(true)}
      >
      <span className='btn-texto-nueva-cita'>Nueva</span>
      </button>
      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal='true'>
        <div className='modal-content'>
        <Formulario/>
        </div>
      </div>
      )}
    </main>
  )
}
export default App;