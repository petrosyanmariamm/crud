import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";



export  function AddUser() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''

  });

  const navigate = useNavigate();
  const changeHandler = (target)=>{
      console.log(target.name, target.value);
      setUser({...user, [target.name]: target.value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    navigate('/');
  }


  return (
   <form onSubmit={submitHandler}>
      <input type="text" placeholder="Name" name ='name' value={user.name} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="UserName" name = 'username' value={user.username} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Email" name = 'email' value={user.email} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Phone"  name = 'phone' value={user.phone} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Website" name = 'website' value={user.website} onChange={(e)=> changeHandler(e.target)}/>
      <button type="submit">ADD</button>
   </form>
  )
}
