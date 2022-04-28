import React, {Fragment} from 'react';

const Pregunta = () => {
    return ( 
        <Fragment>
            <h2>How much money you have?</h2>

            <form>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Write you money"
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