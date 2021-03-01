import React, { useEffect, useState, ReactElement } from "react";
import './LoginStyle.css'
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';
interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
