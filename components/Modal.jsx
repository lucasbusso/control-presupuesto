import cerrarModal from '../src/img/cerrar.svg'
// import { useState } from 'react'

const Modal = ({setModal}) => {
    const ocultarModal = () => {
        setModal(false)
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
    </div>
  )
}

export default Modal