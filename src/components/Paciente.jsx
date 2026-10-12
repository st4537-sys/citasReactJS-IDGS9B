import '../css/paciente.css';


const Paciente = ({
    setModalVisible,
    pacientes,
    paciente,
    eliminarPaciente
}) => {
/**
 * Los parametros son etiquetas que esperan recibir un estado (o funcion)
 */
    const handleEditar = () => {
        // Abrir el modal cuando se de CLick
        setModalVisible(true);
        // Mostrar el array de pacientes en console-log
       console.log(pacientes);
    }
    //HANDLE: Para identificar las funciones dentro del DOM (BOTON)
    //FUNCIO NORMAL: las puedes usar en diferentes partes 
    const handleEliminar = () => {
        eliminarPaciente(paciente.id)


    }

    return(
        <article className="paciente-card" >
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre" > {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha">{paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button 
                    className="paciente-btn paciente-btn-editar"
                    onClick={() => handleEditar()}>Editar</button>
                <button className="paciente-btn paciente-btn-eliminar"
                    onClick={() => handleEliminar()}>Eliminar</button>
            </div>
        </article>
    )
};

export default Paciente;