
function palabras ({palabras}){

    const nPalabras = palabras.split(" ").filter(
        string=>string !== "" && string !== "/n"
    );
    
    console.log(nPalabras);

    
    return (
        <>     
            <h1>Total nº Palabras: {nPalabras.length}</h1>

        </>
    );
    

};

export default palabras;