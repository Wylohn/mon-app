import { useState } from "react"
import {generateUniqueID} from 'web-vitals/dist/modules/lib/generateUniqueID'

export default function Form ({setCards, limit}) {

    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');

    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newCard = {
            id: generateUniqueID(),
            title: formTitle,
            content: formContent,
            isCompleted: false
        };
        if (limit === false) {
            setCards(previousState => [...previousState, newCard])
        } else {
            document.getElementById('addCard').onclick = () => { alert("EUUUH NIK TAM AIR");}
        }
    }

    return (
        <form className="m-5 mx-auto" style={{maxWidth: '450px'}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">Titre</label>
                <input type="title" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" onChange={handleTitleChange}/>
                    
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputContent" className="form-label">Contenu</label>
                <input type="content" className="form-control" id="exampleInputContent" aria-describedby="contentHelp" onChange={handleContentChange}/>
            </div>
            <button type="submit" id="addCard" className="btn btn-primary">Submit</button>
        </form>
    )
}

