function KartaZdjeica({ptitle,padres,pnumber})
{
    let title = ptitle;
    let adres = padres;
    let number = pnumber;
    
    return(
    <>
    <p>{title}</p>
    <img src={adres} alt={title}></img>
    <p>{number > 100 ? "Popularne" : ""}</p>
    </>
    )
}
export default KartaZdjeica