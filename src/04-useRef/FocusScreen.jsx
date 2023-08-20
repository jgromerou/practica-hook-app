import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su Nombre"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};