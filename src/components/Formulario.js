import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <h2> Add your expenses here</h2>

            <div className='campo'>
                <label>Expenses name</label>
                <input
                    type="text"
                    className='u-full-width'
                    placeholder='e.g. Transport'
                />
            </div>

            <div className='campo'>
                <label>Expenses mount</label>
                <input
                    type="number"
                    className='u-full-width'
                    placeholder='e.g. 300'
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