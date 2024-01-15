import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en el Componente LoginPage', () => {
  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el botón', () => {
    const setUserWrapperMock = jest.fn();

    render(
      <UserContext.Provider
        value={{ user: null, setUserWrapper: setUserWrapperMock }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserWrapperMock).toHaveBeenCalledWith({
      email: 'gerardo@google.com',
      id: 123,
      name: 'Gerardo',
    });
  });
});
