import react, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import CreateNote from "./CreateNote"
import Note from "./Note"


function App() {

    const [notesArray, setNotesArray] = useState([]);

    function addNote (noteItem){
        setNotesArray((prevNotesArray)=>{
            return [...prevNotesArray, noteItem]
        });
    }

    // function deleteNote(deletedNoteId) {
    //     setNotesArray((prevNotesArray) => {
    //         console.log(notesArray);
    //         console.log("clicked", deletedNoteId);
    //       return prevNotesArray.filter((noteItem, index) => index !== deletedNoteId);
    //     });
    //   }

      
  function deleteNote(id) {
    setNotesArray(prevNotesArray => {
        // console.log(notesArray);
        // console.log("clicked", id);
      return prevNotesArray.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
      

    return (<div>
        <Header />
        <CreateNote addNote={addNote}/>
        {notesArray.map((noteItem, index) => {
            return <Note
                key={index}
                noteId={index}
                noteTitle={noteItem.title}
                noteContent={noteItem.content}
                onDelete={deleteNote}
            />
        })}
        <Footer />
    </div>)
}

export default App;