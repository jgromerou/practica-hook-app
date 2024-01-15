import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUserWrapper } = useContext(UserContext);

  return (
    <>
      <h2>LoginPage</h2>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-outline-primary"
        onClick={() =>
          setUserWrapper({
            id: 123, //new Date().getTime()
            name: 'Gerardo',
            email: 'gerardo@google.com',
          })
        }
      >
        Set User
      </button>
    </>
  );
};
