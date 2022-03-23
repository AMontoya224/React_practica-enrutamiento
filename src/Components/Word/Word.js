import React from 'react';

function Word( props ){
    const variable = Number(props.match.params.variable);
    return(
        <div style={{textAlign: 'center'}}>
            {
                ( isNaN(variable) ) ? <h1>The word is: {props.match.params.variable}</h1> :
                                      <h1>The number is: {variable}</h1>
            }
        </div>
    )
};
export default Word;