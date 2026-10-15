import { useState } from "react"

function FormularzLogowania()
{
    const[login,setLogin] = useState("");
    const[password,setPassword] = useState("");

return (
    <>
        <p>Login: </p>
        <input type="text" value={login} onChange={(e)=> setLogin(e.target.value)} />
        <p>{login.length > 0  ? `Twoj login to: ${login}` : "Login nie moze być pusty"}</p>
        <p>Hasło: </p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <p>{password.length > 5 ? "Poprawnie wpisane hasło" : `Hasło musi miec Min 5 znakow brakuje ci ${5-password.length}`}</p>
        <p>{password.length > 5 && login.length > 0 ? "Zalogowano pomyślnie" : ""} </p>
    </>
)

}
export default FormularzLogowania