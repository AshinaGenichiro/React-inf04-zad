function KartaProduktu({price,name,isAvailable})
{
    let cena = price;
    let nazwa = name;
    let czyDostepna=isAvailable;
    return (
        <>
        <h2>Produkt {nazwa} Cena produktu {cena}, Cena produktu z vat {cena + cena* 0.23}, czy dostępny: {czyDostepna ? "Tak" : "Nie"}</h2>
        </>
    )
}
export default KartaProduktu;