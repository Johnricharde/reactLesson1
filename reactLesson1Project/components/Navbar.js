/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="logo-and-title">
                <img className="small-logo" src="images/react-icon-small.png" />
                <h1 className="title">ReactFacts</h1>    
            </div>
            <h3 className="extra-title">React Course - Project 1</h3>
        </div>
    )
}