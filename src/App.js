import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CardList} from "./Data/CardList"
import Card from "./Component/Card";
import Form from "./Component/Form";

export default function App() {

    const [cards, setCards] = useState(CardList);

  return (

    <>
        <Form setCards={setCards}/>
    <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
    {cards.map(
        (card) => (
            <Card title={card.title} content={card.content} key={card.id}/>
            
        )
    )}
    </div>
    </>
  )
}