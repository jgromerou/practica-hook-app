import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el hook useCounter', () => {
  const initialValue = 100;
  test('debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter } = result.current;
    expect(counter).toBe(initialValue);
  });

  test('debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test('debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(initialValue));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test('debe de reiniciar el contador', () => {
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment, decrement, reset } = result.current;

    act(() => {
      increment();
      increment(2);
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(initialValue);
  });
});
