import React from "react"
import "./MenuBar.css"

function MenuBar() {

    function ToggleSideBar() {
        document.getElementById("sidebar").classList.toggle('active');
    }

    return (
        <div id="sidebar">
            <div className="toggle-btn" onClick={ToggleSideBar} >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>My account</li>
                <li>Addresses</li>
                <li>Wishlist</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default MenuBar