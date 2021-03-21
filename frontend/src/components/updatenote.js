import axios from 'axios';
import React, {useState}from 'react'

function UpdateNote(props) {
    const [Name, setName] = useState("")
    const [Emails, setEmails] = useState("")
    const [Phones, setPhones] = useState("")
    const [Organization, setOrganization] = useState("")
    const [Notes, setNotes] = useState("")
    const id = props.match.params.id;
    

    function UpdateForm () {
        axios.put(`http://localhost:5000/Resources/ViewAll/update/` + id,
        {Name: Name,
         Emails: Emails,
         Phones: Phones,
         Organization: Organization,
         Notes: Notes
         
        }).then(
        (response) => {console.log(response)//if the above happens succesfulling the function after response will be called
        }
        ).catch(
          err => {
            console.log(err);
          }
        )
    }

    
    
    return (
        <div>
        <label> Name:</label> <input onChange={(e) => setName(e.target.value)}/>
        <label> Emails: </label> <input onChange={e => setEmails(e.target.value)}/>
        <label> Phones: </label> <input onChange={e => setPhones(e.target.value)}/>
        <label> Organization: </label> <input onChange={e => setOrganization(e.target.value)}/>
        <label> Notes: </label> <input onChange={e => setNotes(e.target.value)}/>
        <button onClick={UpdateForm}> Update Info </button>
        </div>
        );

    }
export default UpdateNote;