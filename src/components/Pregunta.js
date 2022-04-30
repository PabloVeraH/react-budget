import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [cantidad, guardaCantidad] = useState(0);

    const [error, guardarError] = useState(false);


    const definirPresupuesto = (e) => {
        guardaCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>How much money you have?</h2>

            { error ? <Error mensaje="The budget is wrong" /> : null }

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Write you money"
                    onChange={definirPresupuesto}
                />
                
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define you Budget"
                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;