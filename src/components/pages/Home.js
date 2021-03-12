import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [users,setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    }

    return (
        <div className ="container">
           <div className = "py-4">
              <h1>Home Page</h1>
              <table className="table border shadow">
                <caption>List of users</caption>
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                     {
                        users.map((user, i) => (
                           <tr>
                              <th scope="row">{i + 1}</th>
                              <td >{user.name}</td>
                              <td >{user.username}</td>
                              <td >{user.email}</td>
                           </tr>
                        ))
                     }
                </tbody>
              </table>
           </div>         
        </div>
    )
}

export default Home;
