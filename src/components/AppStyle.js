import styled from 'styled-components';
export const Container = styled.div``;

export const MainDiv = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin-top: 100px;
`;

export const BtnDown = styled.button`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: wheat;
  }
`;

export const BtnUp = styled.button`
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: wheat;
  }
`;

export const ResetDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const BtnReset = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: wheat;
  }
`;
