import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  //justify-content: space-between;
  border: 1px solid lightblue;

  img {
    max-width: 100%;
    height: auto;
    transform: scale(0.5);
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div{
    padding: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  button {
    border-radius: 0 0 20px 20px;
  }
  
  
  
  
`;