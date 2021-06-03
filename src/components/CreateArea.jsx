import React, { useState } from 'react'
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add"

const CreateArea = (props) => {
     const [note, setNote] = useState({
          title: "",
          content: ""
     })
     const [isExpanded, setExpanded] = useState(false)

     const handleChange = (event) => {
          const {name, value} = event.target
          setNote(prevNote => {
               return {
                    ...prevNote,
                    [name]: value
               }
          })
     }
     const expand = () => {
          setExpanded(true)
     }

     const submitNote = (event) => {
          if( note.title !== "" && note.content !== "" ) {
               props.onAdd(note)
               setNote({
                    title: "",
                    content: ""
     
               })
          }

          event.preventDefault()
     }

     return (
          <div>
               <form className="create-note">
                    {isExpanded && (<input onChange = {handleChange} name = "title" value = {note.title} placeholder = "Title"/>)}
                    <textarea onClick = {expand} onChange = {handleChange} name = "content" value = {note.content} placeholder = "Take a note..." rows = {isExpanded ? 3 : 1}></textarea>
                    <Zoom in={isExpanded}>
                         <Fab onClick={submitNote}>
                              <AddIcon />
                         </Fab>
                    </Zoom>
               </form>
          </div>
     )
}

export default CreateArea