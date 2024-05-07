import react from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){

    
    return (<div className="note">
        <h1>{props.noteTitle}</h1>
        <p>{props.noteContent}</p>
        <button onClick={()=>{ 

        console.log(props);
         props.onDelete(props.noteId);
        }}><DeleteIcon /></button>
        
    </div>)
}

export default Note;