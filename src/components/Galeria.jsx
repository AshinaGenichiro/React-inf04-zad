import KartaZdjeica from "./KartaZdjecia"
function Galeria(){

    return(
        <>
        <h1>Galeria</h1>
        <KartaZdjeica ptitle="VOLVO" padres="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlVKWI7EM-PMf3YhHLSFfvVWCvQV7bBA3jRYysSeJyQ&s=10" pnumber={400}></KartaZdjeica>
        <KartaZdjeica ptitle="Golf" padres="https://img.chceauto.pl/arts/3341/korozja-czyli-cichy-zabojca-27532_v1.jpg" pnumber={677}></KartaZdjeica>
        <KartaZdjeica ptitle="Bmw" padres="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpB-ZhdnfDgbjlLo6_p35ShUiSRHewNCJ5cd5VcVQZA&s=10" pnumber={67}></KartaZdjeica>
        </>
    )
}
export default Galeria