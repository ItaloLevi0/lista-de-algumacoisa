import React from "react";
import Item from "./components/Item";

const API_URL = 'http://192.168.3.183:8000'

export default function cardapio() {
  const [cardapio, setCardapio] = React.useState([])

  React.useEffect(() => {
    fetch(API_URL + '/items')
      .then(response => response.json())
      .then(dados => setCardapio(dados))
  }, [])

  return (
    <div>
      
      {cardapio.map(cadaUm => {
        return (<Item key={cadaUm.id} nome={cadaUm.nome}/>)
      })}
      

    </div>
  );
}


