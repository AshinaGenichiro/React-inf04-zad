import { useState } from "react"

function WyborKoloru()
{
    const[Color,setColor] = useState("white")
    const[showColor,setShow] = useState(false);
    function setColorRed()
    {
        setColor("red")
    }
     function setColorGreen()
    {
        setColor("green")
    } function setColorBlue()
    {
        setColor("blue")
    }
    function showP()
    {
        setShow(!showColor);
    }
    
    return(
        <div style={{ backgroundColor: Color}}>
        <button onClick={setColorRed}>Czerwony</button>
        <button onClick={setColorGreen}>Zielony</button>
        <button onClick={setColorBlue}>Niebieski</button>
        <button onClick={showP}>{showColor ? "Ukryj nazwę" : "Pokaż nazwę"}</button>
        {showColor ? <p>Aktualny kolor: {Color}</p> : null} 
        
        </div>
    )
}
export default WyborKoloru