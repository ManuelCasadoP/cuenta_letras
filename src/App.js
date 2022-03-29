
import { useState } from 'react';
import './App.css';
import Letras from "./components/Letras";
import Palabras from "./components/Palabras";



function App() {

  const [ textAreaContent, setTextAreaContent ] = useState("");


  function changeTextHandler (event) {
    setTextAreaContent (event.target.value);
    console.log(textAreaContent);
  }

  
  return (
    <>
      <h1>Cuenta Letras</h1>
      
      <textarea 
          onChange={changeTextHandler}
          placeholder='Introduzca el texto a contar...' 
          maxLength={500}
          rows={8} 
          cols={80}>
      </textarea>
      
      <Letras Letras={Letras}/>
      <Palabras Palabras={Palabras}/>


            
    </>
  );
}

export default App;
