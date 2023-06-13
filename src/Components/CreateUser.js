import axios from "axios";
import React,{useState} from "react";

function CreateUser(){

    const[username,setUsername]=useState("");


    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      // Handle form submission

        const user={
         username:username,     
        }
        console.log(user);
        // console.log("user added")

        axios.post('http://localhost:3000/user/add',user)
        .then(res =>console.log(res.data))
        .catch((e) => {
            console.log(e);
        })
    };

return(
    <div>
    <h3>Create New User</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group"> 
        <label>Username: </label>
        <input  type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
            />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary mt-3" />
      </div>
    </form>
</div>
)
}

export default CreateUser;
