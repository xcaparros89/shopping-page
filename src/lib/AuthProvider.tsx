import React, { ReactElement, useState } from "react";
import {UserAuth} from '../interfaces'

export const UserContext = React.createContext<any>(null);

export function UserProvider({children}:{children: JSX.Element}): ReactElement {
  const [user, setUser] = useState<UserAuth>({
    userInfo: null,
    isCustomer: false,
    isAdmin: false,
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}
