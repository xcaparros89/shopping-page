import React, {useState} from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import { MemoryRouter } from 'react-router-dom';



// const UserContext = React.createContext()
// test("<Header /> renders without crashing", () => {
//   const [user, setUser] = useState({
//     userInfo: null,
//     isCustomer: false,
//     isAdmin: false,
//   });
//   const div = document.createElement("div");
//   render(
//       <MemoryRouter>
//       <UserContext.Provider value = {[user, setUser]}>
//     <Header />
//       </UserContext.Provider>
//       </MemoryRouter>,
//     div
//   );
// });
