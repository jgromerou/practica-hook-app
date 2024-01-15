import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el componente MultipleCustomHooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //limpiar todos los mocks
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto ', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Simpsons Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled).toBeTruthy();

    //screen.debug();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote:
            "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
          character: 'Homer Simpson',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          characterDirection: 'Right',
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Homer Simpson')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled).toBeFalsy();

    // screen.debug();
  });

  test('debe de llamar la función incrementar', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote:
            "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
          character: 'Homer Simpson',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
          characterDirection: 'Right',
        },
      ],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();

    //screen.debug();
  });
});
