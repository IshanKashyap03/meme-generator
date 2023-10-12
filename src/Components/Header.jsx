import React from "react";
import trollPic from "../assets/Troll Face.png"

export default function header(){
    return (
        <header className="header">
        <img src={trollPic} alt="troll-pic" className="header-image"/>
        <h2 className="header-heading">Meme Generator</h2>
        </header>
    )
}