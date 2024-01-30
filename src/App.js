import { useState } from 'react';
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Sudacao';

function App() {

  const meusItens = ['React', 'Vue', 'Andular']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Testando ReactJS</h1>
      <h2>Testando Eventos</h2>
      <Evento />
      <Form />
      <h2>Renderização Condicional</h2>
      <Condicional/>
      <h2>Renderização de Listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <h2>State Lift:1</h2>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
