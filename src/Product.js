import React from "react"

function Product(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>Price: Rs.{props.price}/-</p>
            <p>{props.description}</p>
            <hr></hr>
        </div>
    )
}

export default Product