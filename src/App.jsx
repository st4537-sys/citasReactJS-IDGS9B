import { useState } from 'react';
import './css/main.css';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';

function App () {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <main className="container">
      <h1 className='title'>
        Administrador de Citas <span className='title-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => setmodalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>


    {pacientes.map((paciente) => (
      <Paciente
       setmodalVisible={setmodalVisible}
       pacientes={pacientes}
       paciente={paciente}
       key={paciente.id}
      />
    ))}

{/*
* Los argumentos son quienes hacen que la funcion que programamos avance, como la electricidad 
con la computador
 */}

      

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal='true'>
        <div className='modal-content'>
        <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        />
        </div>
      </div>
      )}
      
    </main>
  )
}

export default App;