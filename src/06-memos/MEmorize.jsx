import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const MEmorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
