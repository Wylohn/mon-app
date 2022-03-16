export default function Card({id, title, content, card, setCards}) {
    
    const handleDelete = () =>
    {
        const newCardList = card.filter(e => e.id !== id);
        setCards(newCardList);
    }

    const handleStatus = () =>
    {
        console.log('Mon sac est fait')
    }

    return (
        <div className="col">
            <div className="card">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-danger" onClick={() =>handleDelete()}>Supprimer</button>
                    </div>
                    <div className="col form-check">
                        <input type="checkbox" className="form-check-input" onChange={() => handleStatus()}/>
                        <label className="form-check-label">Est fait</label>   
                    </div>
                </div>
            </div>
        </div>
    )
}