import {ReactElement, useContext } from "react";
import './LoginStyle.css'
import LoginForm from '../../forms/LoginForm';
import { Redirect } from 'react-router-dom';
import {UserContext} from '../../../lib/AuthProvider' 

export default function Login(): ReactElement {
  let [user, setUser] = useContext(UserContext);
  return (
    <div>
      {!user.isAdmin && <Redirect to='/admin/login'></Redirect>}      
      <LoginForm />
    </div>
  );
}
