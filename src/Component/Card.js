export default function Card({id, title, content, card, setCards, isCompleted}) {
    
    const handleDelete = () =>
    {
        const newCardList = card.filter(e => e.id !== id);
        setCards(newCardList);
    }

    const handleStatus = () =>
    {
        if (isCompleted) {
            isCompleted = false;
            
        } else {
            isCompleted = true;
        };

        let completeCardList = card.map(e => {
            if (e.id === id) {
                return {...e, isCompleted: isCompleted}
            }
            return e;
        });
        
        setCards(completeCardList)
    }

    return (
        <div className="col">
            <div className="card">
                <h5 className="card-title" style={{ textDecoration: isCompleted ? "line-through" : ""}}>{title}</h5>
                <p className="card-text" style={{ textDecoration: isCompleted ? "line-through" : ""}}>{content}</p>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-danger" onClick={() =>handleDelete()}>Supprimer</button>
                    </div>
                    <div className="col form-check">
                        <input type="checkbox" className="form-check-input" onChange={() => handleStatus()}/>
                        <label className="form-check-label" style={{ textDecoration: isCompleted ? "line-through" : ""}}>Pas fait</label>   
                    </div>
                </div>
            </div>
        </div>
    )
}