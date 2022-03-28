import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import cerrarModal from '../src/img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')

  useEffect( () => {
    if(Object.keys(gastoEditar).length > 0){ 
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, [])

  const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        
        setTimeout(() => {
              setModal(false)
    }, 300);
    }
  
  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, cantidad, categoria ].includes('')){
      setMensaje('Todos los campos son obligatorios')
      
      setTimeout(() => {
        setMensaje('')
      }, 1500);
      return;
    }
    guardarGasto({nombre, cantidad, categoria, id, fecha})
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
        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
        >
            <legend>{gastoEditar.nombre ? "Editar gasto" : "Nuevo gasto"}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

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
              <label htmlFor="cantidad">Cantidad</label>
              
              <input 
              type="number" 
              id='cantidad'
              placeholder='Añade la cantidad: ej. 500'
              value={cantidad}
              onChange={ e => setCantidad(Number(e.target.value))}
              />
            </div>        

            <div className='campo'>
              <label htmlFor="categoria">Categoría</label>

              <select 
              id="categoria"
              value={categoria}
              onChange={ e => setCategoria(e.target.value)}
              >
                 <option value="">-- Seleccione --</option>
                 <option value="Ahorro">Ahorro</option>
                 <option value="Comida">Comida</option>
                 <option value="Casa">Casa</option>
                 <option value="Gastos">Gastos Varios</option>
                 <option value="Ocio">Ocio</option>
                 <option value="Salud">Salud</option>
                 <option value="Suscripciones">Suscripciones</option>
              </select>
            </div>
            <input 
            type="submit" 
            value={gastoEditar.nombre ? "Guardar cambios" : "Añadir gasto"}
            />
        </form>
    </div>
  )
}

export default Modal