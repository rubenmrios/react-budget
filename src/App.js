import React, {useState} from 'react';
import Question from './components/Question';

function App() {

  //definir state
  const [presupuesto,guardarPresupuesto] =useState(0)
  const [restante,guardarRestante] =useState(0)


  return (
    <div className="App">
      <h1>Presupuesto</h1>
      <div className="contenido-principal">

      <Question
      guardarPresupuesto={guardarPresupuesto}
      guardarRestante={guardarRestante}
      />
      </div>
      
    </div>
  );
}

export default App;
