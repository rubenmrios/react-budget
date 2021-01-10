import React, {Fragment,useState} from 'react';
import Error from './Error';

const Question = ({guardarPresupuesto,guardarRestante }) => {
    //definir state
    const [cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false);

    //funcion que lee el presupuesto
    const definirPresupuesto = e => {
        //convertir de string a numero
        guardarCantidad( parseInt(e.target.value,10) )
    }

    //submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //error
        guardarError(false)

        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
    }

    return ( 
    <Fragment>
        <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje="el presupuesto es incorrecto" /> : null}
        <form onSubmit={agregarPresupuesto}>
            <input type="number" placeholder="Coloca tu presupuesto" onChange={definirPresupuesto}/>
            <input type="submit" value="definir presupuesto"/>
        </form>
    </Fragment>
    
     );
}
 
export default Question;