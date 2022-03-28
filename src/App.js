
import './App.css';

function App() {
  return (
    <>
      <h1>Cuenta Letras</h1>
      <textarea 
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
