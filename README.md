# Aprendendo ReactJS
<img src="./public/logo192.png" alt="Exemplo imagem">

> Repositório dedicado ao estudo do ReacJS


## Menu

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Componentes](#componentes)
- [Props](#props)
- [Adicionando CSS](#adicionando-css)
- [Fragments](#fragments)
- [Hooks](#hooks)
- [Eventos](#eventos)
- [Renderização Condicional](#renderização-condicional)

## Introdução

- O ReactJS é uma biblioteca JavaScript para criação de interfaces.

- Utilizado para construir SPAs (Single Page Applications).

- Baseado em componentes.

- Utiliza o JSX para renderizar HTML.

## Instalação

- Para instalar o React é necessário ter o Node e o npm instalados.

- A forma mais tradicional para se começar um projeto ReactJS é através do comando <u>create-react-app</u>

- No entanto, a forma mais indicada para se começar um projeto React é através do vite com o comando <u>npm create vite@latest</u>. Uma vez que o CRA não recebe atualizações com frequência e a tecnologia do vite para compilar o projeto realiza o processo de build 20x mais rápido que o CRA.

- Dica: Pesquise por <u>viteJS awesome</u> para acessar templates de React.

## Componentes

- Blocos de construção reutilizáveis para criar interfaces de usuário. Cada componente pode ter seu próprio estado (dados internos) e comportamentos (funções).

- Permitem dividir a aplicação em partes.

- Os componentes renderizam JSX, assim como App.js (que é um componente).

- Precisa-se criar um arquivo de componente e importá-lo onde for utilizar.

## Props

- Props (propriedades) são meios de passar dados de um componente pai para um componente filho.

- São basicamente argumentos que são fornecidos quando se cria ou utiliza um componente.

- Props deixam a aplicação dinânimca, mudando a execução de acordo com seu valor.

- Props são somente variáveis de leitura.

- Exemplo:

    ```
    //componente pai
    function App() {
        return (<MeuComponente texto="Hello world" />);
    }

    //componente filho
    function MeuComponente(props){
        return (<p>{props.texto}</p>);
    }
    ```
- É possível passar métodos como props de um componente pai para um componente filho. Permitindo que o componente filho invoque esses métodos definidos no componente pai
 
## Adicionando CSS

- O CSS pode ser adicionado de forma global na aplicação por meio de arquivos, como o index.css por exemplo.

- Também é possível estilizar a nível de componentes, utilizando CSS modules. Para isso, basta criar um arquivo como <u>NomeDoComponente.module.CSS</u> e importar este CSS dentro do componente.

## Fragments

- Uma maneira de agrupar múltiplos elementos filhos (normalmente para o return) sem a necessidade de adicionar um elemento extra à árvore DOM (como a div).

- A sintaxe é <> e </>, não havendo um nome para a tag.

- Exemplo:
    ```
    <>
        <p>Elemento 1</p>
        <p>Elemento 2</p>
    </>
    ```

## Hooks

- Hook é uma função especial que permite utilizar funcionalidades de componentes de classe em componentes funcionais, possivilitando o use de estado e outras características do ciclo de vida de componentes baseados em funções.

- No React os hookies são funções que começam com o prefixo "use", como <u>"useState"</u>, <u>"useEffect"</u>, <u>"useContext"</u>, entre outros.

- Os hookies tornam os componentes funcionais mais poderosos, permitindo que eles tenham estado, efeitos, contextos e outras funcionalidades.

- Exemplos comuns de hookies:
    ```
    import React, {useState} from 'react';

    function MeuComponente() {
    const [estado, setEstado] = useState(0);

    return (
        <div>
        <p>Estado: {estado}</p>
        <button onClick={() => setEstado(estado + 1)}>Incrementar</button>
        </div>
    );
    }
    ```
    ```
    import React, { useEffect, useState } from 'react';

    function MeuComponente() {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        // Lógica a ser executada após a renderização do componente
        fetch('https://api.exemplo.com/dados')
        .then(response => response.json())
        .then(data => setDados(data));
    }, []); // O array vazio [] significa que este efeito ocorrerá apenas uma vez após a montagem inicial do componente.

    return (
        <div>
        <p>Dados: {dados}</p>
        </div>
    );
    }
    ```

## Eventos

- Em React os eventos são manipulados de forma semelhante aos eventos HTML, mas com algumas diferenças importantes.

- A manipulação de eventos em Reato é feita usando camelCase, como "onClick" em vez de "onclick".

- Além disso, em React se passa uma função como manipuladora de evento quando o evento ocorre.

- Exemplo básico de evento em react:
    ```
    import React, { useState } from 'react';

    function MeuComponente() {
    const [contador, setContador] = useState(0);

    // Manipulador de evento
    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <div>
        <p>Contador: {contador}</p>
        {/* Evento de clique */}
        <button onClick={handleClick}>Clique-me</button>
        </div>
    );
    }
    ```

- Neste exemplo: 
1. Criamos um estado (contador) usando o hook useState.
2. Definimos uma função chamada handleClick que será chamada quando o botão for clicado. Essa função atualiza o estado do contador.
3. Passamos a função handleClick para o evento onClick do botão.

    Ao clicar no botão, a função handleClick é executada, e o estado do contador é atualizado, o que leva a uma re-renderização do componente com o valor atualizado exibido.

- Além do onClick, há muitos outros eventos que você pode manipular em React, como onChange, onSubmit, onMouseOver, entre outros.

## Renderização condicional
- Em ReactJS, a renderização condicional é realizada utilizando estruturas condicionais, como if, else, e operadores ternários, dentro do método render de um componente. 

- Isso permite que se determine quais elementos ou componentes devem ser renderizados com base em determinadas condições.

- Para realizar a renderização condicional precisa-se inicialmente declarar a variável a ser verificada entre chaves {}. 

- O operador && pode ser utilizado ao lado da variável, indicando que o que vier após só poderá ser renderizado caso a validação anterior seja verdadeira.

- Exemplos:
    ```
    import React from 'react';

    function MeuComponente({ estáLogado }) {
        return (
            <div>
            {estáLogado ? (
                <p>Bem-vindo! Você está logado.</p>
            ) : (
                <p>Faça o login para acessar.</p>
            )}
            </div>
        );
    }
    ```
    ```
    import React from 'react';

    function MeuComponente({ estáLogado }) {
        if (estáLogado) {
            return <p>Bem-vindo! Você está logado.</p>;
        } else {
            return <p>Faça o login para acessar.</p>;
        }
    }
    ```
    ```
    import React from 'react';

    function MeuComponente({ estáLogado }) {
        return (
            <div>
                {estáLogado && (
                    <p>Bem-vindo! Você está logado.</p>
                )}
            </div>
        );
    }
    ```