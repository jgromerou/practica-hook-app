import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, character }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blochquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{character}</footer>
      </blockquote>

      <code className="mb-2">{JSON.stringify(boxSize)}</code>
      <br />
    </>
  );
};
