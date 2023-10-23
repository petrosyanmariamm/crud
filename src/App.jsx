import { Routes, Route } from "react-router-dom";

import { AddUser } from './pages/AddUser';
import { EditUser } from './pages/EditUser';
import { UserDetailPage } from './pages/UserDetailPage';
import { UsersPage } from './pages/UsersPage';



export  function App() {


  return (
   
    <Routes>
      <Route path="/" element={<UsersPage/>}/>
      <Route path="/user/add" element={<AddUser/>}/>
      <Route path="/user/edit/:id" element={<EditUser/>}/>
      <Route path="/user/:id" element={<UserDetailPage/>}/>
    </Routes>

  )
}
