import React from "react"
import "./Component.css"

function Component(props) {

    return (
        <div className="component" >
            <img alt="Unable to load" />
            <b>{props.name}</b><br />
            <i>Price: ${props.price}</i>
        </div>
    )
}

export default Component