import { useState } from "react"

function FormularzKontaktu()
{
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[message,setmessage] = useState("")

    return(
        <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <p>Wpisane Imię: {name}</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <p>Wpisany Email: {email}</p>
        <textarea value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
        <p>Wiadomosc: {message}</p>
        </>
    )

}
export default FormularzKontaktu