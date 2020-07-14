import React, { useState } from "react"
import "./Component.css"

function Component(props) {
    const [addToCart, setAddToCart] = useState(false)
    const [addWishlist, setAddWishlist] = useState(false)

    function handleAddToCart() {
        setAddToCart(!addToCart)
    }

    function handleAddWishlist() {
        setAddWishlist(!addWishlist)
    }

    return (
        <div className="component" >
            <img alt="Unable to load" />
            <b>{props.name}</b><br />
            <i>Price: ${props.price}</i><br/>
            <u onClick={handleAddWishlist} >{addWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</u><br/>
            <u onClick={handleAddToCart} >{addToCart ? "Remove from Cart" : "Add to Cart"}</u>
        </div>
    )
}

export default Component