import styled, { keyframes } from 'styled-components';

export const LoadMoreButton = styled.button`
  color: #836e98;
  background: white;
  border: 2px solid #836e98;
  border-radius: 1px;
  outline: none;
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding: 10px 15px;
  margin: 20px 0;
  cursor: pointer;
  transition: color 0.5s ease-in-out, background 0.5s ease-in-out;

  &:hover {
    color: white;
    background: #836e98;
  }
`;

export const ProductsContainer = styled.main`
  /* margin: 0 auto; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const AllProducts = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #7db1c1;
  text-align: center;
  color: #52494c;
`;

const loadingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0
  }
`;

export const Loading = styled.p`
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52494c;
  height: 500px;
  width: 100%;
  opacity: 0;
  animation: ${loadingAnimation} 2s linear infinite;
`;
