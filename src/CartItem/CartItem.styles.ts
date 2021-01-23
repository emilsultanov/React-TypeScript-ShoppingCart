import styled from "styled-components";



export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  font-family: Arial,Helvetica, sans-serif;
  
  div{
    flex: 1;
  }
  
  .information,
  .buttons{
    display: flex;
    justify-content: space-between;
  }
  
  img{
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
    margin-left: 40px;
  }
`;