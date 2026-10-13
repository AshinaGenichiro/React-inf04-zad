import { useState } from "react"

function Glosowanie(){
const[like,setLike] = useState(0)
const[dislike,setDislike] = useState(0)

function zwiekszLike()
{
    setLike(like+1)
}
function odejmijLike()
{
    setDislike(like+1)
}
function reset()
{
    setDislike(0)
    setLike(0)
}

return(
    <>
    <p>Głosy za: {like}</p>
    <p>Głosy przeciw: {dislike}</p>
    <button onClick={zwiekszLike}>Głosuj za</button>
    <button onClick={odejmijLike}>Głosuj przeciw</button>
    <button onClick={reset}>Resetuj</button>

    
    </>
)

}
export default Glosowanie