import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//   id: new Date().getTime(),
//   name: 'Gerardo',
//   email: 'gerardo@google.com',
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const setUserWrapper = (newUser) => {
    setUser(newUser);
  };

  return (
    //<UserContext.Provider value={{ hola: 'Mundo', user }}>
    <UserContext.Provider value={{ user, setUserWrapper }}>
      {children}
    </UserContext.Provider>
  );
};
