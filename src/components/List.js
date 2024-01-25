import Item from "./Item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>                
                <Item ano_lancamento={1972}/>                
                <Item marca="Renault" />                
                <Item />                
            </ul>
        </>
    )
}

export default List