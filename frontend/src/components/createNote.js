import axios from 'axios';
import React, {useState}from 'react'


function CreateNote(props) {
    const [Name, setName] = useState("")
    const [Emails, setEmails] = useState("")
    const [Phones, setPhones] = useState("")
    const [Organization, setOrganization] = useState("")
    const [Notes, setNotes] = useState("")
    

    function SubmitForm () {
        axios.post('http://localhost:5000/Resources/ViewAll/create',
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
        <button onClick={SubmitForm}> Submit Info </button>
        </div>
        );

    }
export default CreateNote;
//allowing us to access CreateNote file inside App.js
//OnChange allows us update the variables whenever the input changes
//OnChange takes in a single argument, which is the event OnChange, the function then updates the variables through setVar function
//e.target.value calls the new data inside the input, setVar triggers rerender and calls the function above
//the submit bottom is there so that whenever we click it, it will make a post request to the specified endpoint in bakend to perform its function
//do not put () after the submitform func, otherwise it will return the value instead of executing the function
//the post request has two arguments here, one is the location of the endpoint, the other is an Json object with key-value pairs
//add a component to keep track of ID