import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    const [cantidad, guardaCantidad] = useState(0);


    const definirPresupuesto = (e) => {
        guardaCantidad(parseInt(e.target.value, 10))
    }

    return ( 
        <Fragment>
            <h2>How much money you have?</h2>

            <form>
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
 
export default Pregunta;