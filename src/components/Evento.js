function Evento() {
    
    function meuEvento(){
        console.log("Opa, fui ativado!")
    }

    return (
        <div>
            <p>Clique parar disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento