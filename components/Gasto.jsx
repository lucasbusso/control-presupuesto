import React from 'react'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem, 
  SwipeAction, 
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatearFecha } from './helpers';

import IconoAhorro from '../src/img/icono_ahorro.svg'
import IconoCasa from '../src/img/icono_casa.svg'
import IconoComida from '../src/img/icono_comida.svg'
import IconoOcio from '../src/img/icono_ocio.svg'
import IconoGastos from '../src/img/icono_gastos.svg'
import IconoSalud from '../src/img/icono_salud.svg'
import IconoSuscripciones from '../src/img/icono_suscripciones.svg'

const diccionarioIconos = {
  Ahorro : IconoAhorro,
  Comida : IconoComida,
  Casa : IconoCasa,
  Gastos : IconoGastos,
  Ocio : IconoOcio,
  Salud : IconoSalud,
  Suscripciones : IconoSuscripciones
}

const Gasto = ({gasto}) => {
  const {categoria, nombre, cantidad, id, fecha} = gasto;
  
  const leadingActions = () => (
     <LeadingActions>
       <SwipeAction onClick={() => {console.log('editando...')}}>
          Editar
       </SwipeAction>
     </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction onClick={() =>{ console.log('eliminando...')}}>
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )
  
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img
                  src={diccionarioIconos[categoria]}
                  alt="Iconos"
              
              />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{categoria}</p>
                    <p className='nombre-gasto'>{nombre}</p>
                    <p className='fecha-gasto'>Agregado el: {''} <span>{formatearFecha(fecha)}</span> </p>
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto