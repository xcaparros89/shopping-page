import React, { ReactElement, useContext } from 'react'
import { Route, Redirect } from "react-router-dom";
import {UserContext} from "./AuthProvider"

// interface AdminInt {
//     AdminComponent?: React.ReactNode
// }
// const AdminRoute: React.FC<AdminInt> = (props) => {
//     const [user, setUser] = useContext(UserContext)
//     console.log(user, 'user');
//     return (
//         {props.AdminComponent}
//     )
// }

// export default AdminRoute


interface AdminInt {
    AdminComponent?: React.ReactNode;
  }
  
//   const AdminComponent: React.FC = () => <h2>This is a child component</h2>
  
export const ParentComp: React.FC<any> = (props) => {
    const [user, setUser] = useContext(UserContext)
    const { AdminComponent } = props;
    return <div>
        <p>hi</p>{AdminComponent}</div>;
  };
  
//   function App() {
//     return (
//       <>
//         <ParentComp AdminComponent={<AdminComponent />} />
//         <ParentComp AdminComponent={<h3>Child component 2</h3>} />
//         <ParentComp AdminComponent={(
//           <div style={{border: '2px solid red'}}>
//             <h4>Child component</h4>
//             <p>With multiple children</p>
//           </div>
//         )} />
//       </>
//     );
//   }