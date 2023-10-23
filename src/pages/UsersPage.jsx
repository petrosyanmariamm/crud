import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



export  function UsersPage() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
      loadUsers();
  }, []);

  const loadUsers = async()=>{
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  }

  const removeUser = async(id)=>{
    await axios.delete('http://localhost:3000/users/' + id);
    loadUsers();
  }


  return (
    <div>
      <button onClick={()=> navigate('/user/add')}>Add New User</button>
      <table style={{width: '100%'}}>
            <thead>
              <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                  <th>actions</th>
                </tr>
            </thead>
             <tbody>
                {
                  users.map(el=> <tr key={el.id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>
                      <button onClick={()=> navigate('/user/edit/' + el.id)}>edit</button>
                      <button onClick={()=> navigate('/user/' + el.id)}>detail</button>
                      <button onClick={()=> removeUser(el.id)}>delete</button>
                    </td>
                  </tr>)
                }
            </tbody>   
                
        </table>
    </div>
  )
}
