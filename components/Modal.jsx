import cerrarModal from '../src/img/cerrar.svg'
// import { useState } from 'react'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
              setModal(false)
    }, 400);
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
            src={cerrarModal} 
            alt="Boton cerrar"
            onClick={ocultarModal} 
            />
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo gasto</legend>
        </form>
    </div>
  )
}

export default Modal