
function palabras ({palabras}){

    const nPalabras = palabras.split(" ")
    
    nPalabras.filter(
        string=>string !== ("")
    )
            
    console.log(nPalabras);

    return (
        <>     
            <h1>Total nº Palabras: {nPalabras.length}</h1>

        </>
    );


};

export default palabras;