import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setList(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    <div className="users">
      <h2 style={{color:"violet"}}>Users Profile</h2>
    <div className="profile">
      {list.map((user) => {
          return(
    <div key={user.id}>
     <div className="card" style={{ width: "18em",
     margin: "20px",
     height: "11rem",
     border:"solid 0.25em violet"}}>
     <div className="card-header">
        <h6> {user.name}</h6>
     </div>
     <ul className="list-group list-group-flush">
        <li className="list-group-item" >{user.email}</li>
        <li className="list-group-item">{user.phone}</li>
        <li className="list-group-item">{user.website}</li>
    </ul>
    </div>
    </div>
        );
      })}
      </div>   
    </div>
    </div>
  );
};
export default UserList;
