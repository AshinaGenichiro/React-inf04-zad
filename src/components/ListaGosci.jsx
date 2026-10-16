import { useState } from "react"

function ListaGosci ()
{
    const[guest,setGuestList] =useState([])
    const[name,setName] = useState("")
    let id = 0;
     function addGuest() {
    if (name.trim() === "") {
      return;
    }

    const newGuest = {
      id: Date.now(),
      name: name,
      date: new Date().toLocaleDateString("pl-PL"),
    };

    setGuestList([...guest, newGuest]);
    setName("");
  }
    return(
        <>
        <p>Wpisz imie: </p>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={addGuest}>Dodaj goscia</button>
         <ul> 

  {guest.map((g) => ( 

  <li key={g.id}> 

   Id: {g.id} Imie: {g.name}, Data: {g.date} 

  </li> 

  ))} 

 </ul> 
        </>
    )
}
export default ListaGosci