import { useState } from 'react';
import './css/main.css';
import Formulario from './components/Formulario';
import Paciente from './components/Paciente';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  //Para pasar estados de un componente padre a u componente hijo 
  //se hace atraves de props
  const [pacientes, setPacientes] = useState([]);

  const eliminarPaciente = (id) => {
    const confirmar = window.confirm("Deseas eliminar el paciente? Una vez eliminado no se puede recuperar");
    console.log(confirmar);
    if(confirmar){
      const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacienteActualizado);
    }
    
  }
  return (
    <main className="container">
      <h1 className='title'>
        Administrador de Citas <span className='title-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => setModalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>


    {pacientes.map((paciente) => (
      <Paciente
       setModalVisible={setModalVisible}
       pacientes={pacientes}
       paciente={paciente}
       eliminarPaciente={eliminarPaciente}
       key={paciente.id}
      />
    ))}

{/*
* Los argumentos son quienes hacen que la funcion que programamos avance, como la electricidad 
con la computador
 */}

      

      {modalVisible && (
          <div className='modal-overlay' role='dialog' arial-modal="true">
            <div className='modal-content'>
              <Formulario
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              pacientes={pacientes}
              setPacientes={setPacientes}
              />
            </div>
        </div>
      )}
      
    </main>
  )
}

export default App;