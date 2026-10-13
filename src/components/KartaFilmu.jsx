function KartaFlimu({PTitle,Pdirector,Pgrade,PisReccomended})
{
    let title = PTitle;
    let director = Pdirector;
    let grade = Pgrade;
    let isReccomended = PisReccomended;
    return(
        <>
        <h2>Tytuł: {title}, Reżyser: {director}, Ocena : {grade} {isReccomended ? "Film polecany" : ""}</h2>
        </>
    )
}
export default KartaFlimu