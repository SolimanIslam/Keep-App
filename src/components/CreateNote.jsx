import react, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';


function CreateNote(props) {
    const [expand, setExpand] = useState(false);



    const [noteData, setNoteData] = useState({
        title: "",
        content: ""
    });

    function handleNoteDataChange(event) {
        const { name, value } = event.target;
        setNoteData((previousNoteData) => {
            return { ...previousNoteData, [name]: value }
        });
    }

    return (<div>
        <form 
        className="create-note" 
        onSubmit={(event) => {
            props.addNote(noteData);
            event.preventDefault();
            setNoteData({
                title: "",
                content: ""
            });

        }}>
            {expand && <input 
            name="title" 
            placeholder="Title" 
            value={noteData.title} 
            
            onChange={handleNoteDataChange}
             />}
            <textarea 
            name="content" 
            placeholder="Take a Note" 
            value={noteData.content}     
            onChange={handleNoteDataChange}
            onClick={()=>{
                setExpand(true);
            }}
            rows={expand ? "3" : "1"} />
            <Zoom in={expand}>
                <Fab type="submit">
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>);

}

export default CreateNote;

