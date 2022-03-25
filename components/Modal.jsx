import { useState } from 'react'
import cerrarModal from '../src/img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')


  const ocultarModal = () => {
        setAnimarModal(false)
        
        setTimeout(() => {
              setModal(false)
    }, 300);
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

            <div className='campo'>
              <label htmlFor="nombre">Referencia</label>
              
              <input 
              type="text" 
              id='nombre'
              placeholder='Nombre del gasto'
              value={nombre}
              onChange={ e => setNombre(e.target.value)}
              />
            </div>

            <div className='campo'>
              <label htmlFor="nombre">Cantidad</label>
              
              <input 
              type="number" 
              id='cantidad'
              placeholder='Añade la cantidad: ej. 500'
              value={cantidad}
              onChange={ e => setCantidad(e.target.value)}
              />
            </div>        

            <div className='campo'>
              <label htmlFor="nombre">Categoría</label>

              <select 
              id="categoria"
              value={categoria}
              onChange={ e => setCategoria(e.target.value)}
              >
                 <option value="">-- Seleccione --</option>
                 <option value="Ahorro">Ahorro</option>
                 <option value="Comida">Comida</option>
                 <option value="Comida">Comida</option>
                 <option value="Auto">Auto</option>
                 <option value="Comida">Comida</option>
                 <option value="Comida">Comida</option>
                 <option value="Servicios">Servicios</option>
              </select>
            </div>
            <input 
            type="submit" 
            value="Añadir gasto"
            />
        </form>
    </div>
  )
}

export default Modal