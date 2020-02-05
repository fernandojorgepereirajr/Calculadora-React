import React from 'react'
import './Button.css'




export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' :''
    
    return (

        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>

    )

}
// Solucação para transformar  o botão no seu devido estilo
//export default props =>
//    <button className={`
//        button
//        ${props.operation ? 'operation' : ''}
//        ${props.double ? 'double' : ''}
//        ${props.triple ? 'triple' : ''}
//        `}>
//        {props.label}
//    </button>