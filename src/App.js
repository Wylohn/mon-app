import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CardList} from "./Data/CardList"
import Card from "./Component/Card";
import Form from "./Component/Form";
import Limit from "./Middleware/Limiter";

export default function App() {

    const [cards, setCards] = useState(CardList);
    const [limit, setLimiter] = useState(false);

return (

    <>
        <Form setCards={setCards} limit={limit}/>
    <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
    {cards.map(
        (card) => (
            <>
            <Card title={card.title} content={card.content} key={card.id} card={cards} setCards={setCards} id={card.id} isCompleted={card.isCompleted}/>
            <Limit key={cards.id} cards={cards} setLimiter={setLimiter} limit={limit}/>
            </>
        )
    )}
    </div>
    </>
)
}