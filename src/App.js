import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const nome = "Naiara"

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
      <h2>Renderização Condicional</h2>
      <Condicional/>
    </div>
  );
}

export default App;
