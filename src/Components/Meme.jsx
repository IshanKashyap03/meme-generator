import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import guymeme from "../assets/guymeme.jpeg"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText : "" ,
        bottomText :  "" ,
        randomImage : guymeme
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [])

    function getMeme(){
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : memesArray[randomNumber].url 
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                type="text"  
                name="topText" 
                placeholder="Top text"
                value={meme.topText}
                onChange={handleChange}
                className="form-inputs"/>

                <input 
                type="text" 
                name="bottomText" 
                placeholder="Bottom text"
                value={meme.bottomText}
                onChange={handleChange}
                className="form-inputs"/>

                <button name="myButton" className="form-button" onClick={getMeme}>Get a new meme image  🖼</button>
            </div> 
            <div className="meme">
            <img src={meme.randomImage} className="meme-image"></img>
            <h2 className="meme-text-top">{meme.topText}</h2>
            <h2 className="meme-text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
