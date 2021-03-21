import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {
    Link
} from "react-router-dom";

function NoteRow(props) {
    const note = props.note;
    return (
        <div className="row">
            <div className="column"><h3>Name</h3><p>{note.Name}</p></div>
            <div className="column"><h3>Organization</h3><p>{note.Organization}</p></div>
            <div className="column"><h3>Phones</h3><p>{note.Phones}</p></div>
            <div className="column"><h3>Emails</h3><p>{note.Emails}</p></div>
            <div className="column"><h3>Notes</h3><p>{note.Notes}</p></div>
            <div className="column"><h3>ID</h3><p>{note.id}</p></div>
            <Link to={`/update/${note.id}`}> Update </Link>
            <Link to={`/delete/${note.id}`}> Delete </Link>
        </div>)
}

function ListNotes(props) {
    const [notes, setnotes] = useState([])

    useEffect(
        () =>{ axios.get('http://localhost:5000/Resources/ViewAll').then((
            response
        )=>{setnotes(response.data)})//response is the response from backend, which is a json object

        }, []
    )//then is necessary because the code doesn't get the response immediately, so we need to wait for the data to come back then do sth with it


return (<div>
    <h1> Notes </h1>

    {notes.map(note => <NoteRow note={note}/> )}

    <div>
        <Link to="/create"> Create New</Link>
    </div>
</div>)

}

export default ListNotes;
