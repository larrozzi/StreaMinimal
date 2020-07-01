import React from 'react'
import ReactDOM from 'react-dom'


const modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick= {props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default modal
 

// onClick={(e)=>e.stopPropagation()} ::: event handler to stop the child div 
//from having the same behavior its parent has, which a default in html and js. we need to implement its own event handler