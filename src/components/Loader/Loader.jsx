import { Spinner, InnerOne, InnerTwo, InnerThree } from './Loader.styled';

export function Loader() {
  return (
    <Spinner>
      <InnerOne></InnerOne>
      <InnerTwo></InnerTwo>
      <InnerThree></InnerThree>
    </Spinner>
  );
}