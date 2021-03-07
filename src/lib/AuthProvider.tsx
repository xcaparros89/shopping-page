import React, { ReactElement, useState } from "react";

export const UserContext = React.createContext<any>(null);

export function UserProvider(props: any): ReactElement {
  const [user, setUser] = useState({
    userInfo: null,
    isCustomer: false,
    isAdmin: false,
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
