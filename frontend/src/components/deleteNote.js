import axios from 'axios';
import React, {useState}from 'react'


function DeleteNote(props) {
    const id = props.match.params.id;

    

    function DeleteForm () {
        axios.delete('http://localhost:5000/Resources/ViewAll/delete/' + id
        ).then(
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
        <button onClick={DeleteForm}> Delete Info </button>
        </div>
        );

    }
export default DeleteNote;