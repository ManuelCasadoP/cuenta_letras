
import { useEffect, useState } from 'react';
import './App.css';
import Letras from "./components/Letras";
import Palabras from "./components/Palabras";



function App() {

  const [ textAreaContent, setTextAreaContent ] = useState("");


  function changeTextHandler (event) {
    setTextAreaContent (event.target.value);
    console.log("state: ", textAreaContent);
  }

  useEffect(()=>{

    console.log("effect: ", textAreaContent)
  }, [textAreaContent]  
  
  )

  
  return (
    <>
      <h1>Cuenta Letras/Palabras</h1>
      
      <textarea 
          onChange={changeTextHandler}
          placeholder='Introduzca el texto a contar...' 
          maxLength={150}
          rows={8} 
          cols={40}>
      </textarea>
      
      <Letras letras={textAreaContent}/>
      <Palabras palabras={textAreaContent}/>


            
    </>
  );
}

export default App;
