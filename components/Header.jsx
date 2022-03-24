import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        { isValidPresupuesto ? (
            <p>Control presupuesto</p>
        ) : ( 
            < NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        

          <h2>hola</h2>


        

    </header>
  )
}

export default Header 