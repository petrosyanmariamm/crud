import axios from "axios";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";



export  function EditUser() {

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''

  });

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
      loadUser();
  }, [])

  const loadUser = async()=>{
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data)
  }

  const changeHandler = (target)=>{
      console.log(target.name, target.value);
      setUser({...user, [target.name]: target.value})
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    await axios.put('http://localhost:3000/users/' + id, user);
    navigate('/');
  }


  return (
   <form onSubmit={submitHandler}>
      <input type="text" placeholder="Name" name ='name' value={user.name} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="UserName" name = 'username' value={user.username} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Email" name = 'email' value={user.email} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Phone"  name = 'phone' value={user.phone} onChange={(e)=> changeHandler(e.target)}/>
      <input type="text" placeholder="Website" name = 'website' value={user.website} onChange={(e)=> changeHandler(e.target)}/>
      <button type="submit">SAVE</button>
   </form>
  )
}
