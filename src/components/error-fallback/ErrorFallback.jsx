import { useSelector } from 'react-redux';
import { ErrorContainer } from './ErrorFallback.styles';

const ErrorFallback = () => {
  const { errorProducts } = useSelector((state) => state);

  return (
    <ErrorContainer>
      <h1>Something went wrong!</h1>
      <p>{errorProducts.message} </p>
      <p>Please refresh the page!</p>
    </ErrorContainer>
  );
};

export default ErrorFallback;
