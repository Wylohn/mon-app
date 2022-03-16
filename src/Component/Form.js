import { useState } from "react"

export default function Form ({setCards}) {

    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');

    const handleTitleChange = e => {
        console.log(e.target.value);
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        console.log(e.target.value);
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCards(previousState => [...previousState, {title: formTitle, content: formContent}])
    }

    return (
        <form className="m-5 mx-auto" style={{maxWidth: '450px'}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Titre</label>
                <input type="title" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" onChange={handleTitleChange}/>
                    
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputContent" className="form-label">Contenu</label>
                <input type="content" className="form-control" id="exampleInputContent" aria-describedby="contentHelp" onChange={handleContentChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

