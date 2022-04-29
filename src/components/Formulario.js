import React, {useState} from 'react';

const [nombre, guardarNombre] = useState('');
const [cantidad, guardarCantidad] = useState(0);

const agregarGasto = (e) => {
    e.preventDefault();

    // validate

    // build the expense

    // give the expense to the principal component

    // reset the form
}

const Formulario = () => {
    return ( 
        <form onSubmit={agregarGasto}>
            <h2> Add your expenses here</h2>

            <div className='campo'>
                <label>Expenses name</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='e.g. Transport'
                    value={nombre}
                    onChange={ e => guardarNombre(e.target.value) }
                />
            </div>

            <div className='campo'>
                <label>Expenses mount</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='e.g. 300'
                    value={cantidad}
                    onChange={e => guardarCantidad( parseInt(e.target.value, 10) )}
                />
            </div>

            <input
                type="submit"
                className='button-primary u-full.width'
                value="Add expense"
            />
        </form>
     );
}
 
export default Formulario;