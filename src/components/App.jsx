import { useState } from 'react';
import {
  Container,
  MainDiv,
  BtnDown,
  BtnUp,
  ResetDiv,
  BtnReset,
} from './AppStyle';

export const App = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Container>
      <MainDiv>
        <BtnDown onClick={decrement}>Down</BtnDown>
        <h1>{count}</h1>
        <BtnUp onClick={increment}>Up</BtnUp>
      </MainDiv>
      <ResetDiv>
        <BtnReset onClick={reset}>clear</BtnReset>
      </ResetDiv>
    </Container>
  );
};
