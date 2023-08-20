import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://thesimpsonsquoteapi.glitch.me/quotes?count=${counter}`
  );

  const { quote, character } = !!data && data[0];
  //   if (isLoading) {
  //     return <h2>Cargando..</h2>;
  //   }
  return (
    <>
      <h1>Simpsons Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote quote={quote} character={character} />
      )}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
