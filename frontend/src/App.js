//run npm start in frontend folder to access react components
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect}from 'react';
import CreateNote from './components/createNote';//tell APP.js to render the function inside the file
import UpdateNote from './components/updatenote';
import DeleteNote from './components/deleteNote';
import ListNotes from './components/listnotes';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App (props) {

  return (
  <Router>
    <Switch>
      <Route  path="/create" exact={true} component={CreateNote}/>
      <Route path="/update/:id" exact={true} component={UpdateNote}/>
      <Route path="/delete/:id" exact={true} component={DeleteNote}/>
      <Route path="/" exact={true} component={ListNotes}/>
    </Switch>
  </Router>)
 }

export default App;

