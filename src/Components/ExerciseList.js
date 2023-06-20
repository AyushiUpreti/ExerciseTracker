import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';


const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}> <button className='btn btn-dark'>Edit</button> </Link> 
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
         <button className='btn btn-dark'>Delete</button>
      </a>
    </td>
  </tr>
);

const ExerciseList = () => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/exercise/')
      .then(response => {
        setExercise(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteExercise = id => {
    axios.delete('http://localhost:3000/exercise/' + id).then(response => {
      console.log(response.data);
    });

    setExercise(exercise.filter(el => el._id !== id));
  };

  const exerciseList = () => {
    return exercise.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExerciseList;