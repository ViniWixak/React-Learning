import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Andular']

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
      <h2>Renderização Condicional</h2>
      <Condicional/>
      <h2>Renderização de Listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
