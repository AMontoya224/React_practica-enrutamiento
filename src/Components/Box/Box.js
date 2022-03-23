import React from 'react';

function Box( props ){
    const divStyleFun = () => {
        return {
            color : `${props.match.params.letra}`,
            background : `${props.match.params.back}`,
            textAlign: 'center'
        }
    };
    return(
        <div style={divStyleFun()}>
            <h1>
                The word is: {props.match.params.word}
            </h1>
        </div>
    )
}

export default Box;