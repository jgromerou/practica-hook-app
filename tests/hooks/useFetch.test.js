import {
  renderHook,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { useFetch } from '../../src/hooks/useFetch';

describe('Pruebas en el kook useFetch', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() =>
      useFetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
    );
    const { data, isLoading } = result.current;
    expect(data).toBe(null);
    expect(isLoading).toBeTruthy();
  });
});
