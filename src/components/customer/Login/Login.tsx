import {ReactElement } from "react";
import './LoginStyle.css'
import RegisterForm from '../../forms/RegisterForm';
import LoginForm from '../../forms/LoginForm';

export default function Login(): ReactElement {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
