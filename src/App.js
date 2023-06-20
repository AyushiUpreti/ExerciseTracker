import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CreateExercises from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import './App.css';


function App() {
  return (


    <Router> 
      <div className="container">
      <Navbar /> 
        <br/> 
        <Routes> 
          <Route path="/" exact element={<ExerciseList />} /> 
          <Route path="/edit/:id" element={<EditExercise />} /> 
          <Route path="/create" element={<CreateExercises />} /> 
          <Route path="/user" element={<CreateUser />} /> 
        </Routes>
        </div>
    </Router>

    
  );
}

export default App;
