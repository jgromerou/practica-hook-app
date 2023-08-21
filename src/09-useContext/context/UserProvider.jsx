import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: new Date().getTime(),
//   name: 'Gerardo',
//   email: 'gerardo@google.com',
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    //<UserContext.Provider value={{ hola: 'Mundo', user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
