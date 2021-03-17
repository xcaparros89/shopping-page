import {ReactElement, useContext } from "react";
import './LoginStyle.css'
import LoginForm from '../../forms/LoginForm';
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../../lib/AuthProvider' 
import {UserAuth } from "../../../interfaces";

export default function Login(): ReactElement {
  let [user]:[user:UserAuth]= useContext(UserContext);
  return (
    <div>
      {user.isAdmin && <Redirect to='/admin/items/list'></Redirect>}      
      <LoginForm />
    </div>
  );
}
