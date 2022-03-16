export default function Card({title, content}) {
    const key = 'un bidule ?';
    return (
        <div className="col">
            <div className="card">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <button onClick={() => removeCard(id)}>
          </button>
            </div>
        </div>
    )
}