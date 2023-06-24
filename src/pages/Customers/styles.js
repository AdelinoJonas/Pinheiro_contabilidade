import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  height: 100vh;
  padding: 3rem;
  .body{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;
    .card{
      width: 24vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img{
        width: 22vw;
        margin-left: 1vw; 
        background-color: #fff;
        border-radius: 24px;
      }
    }
  }
`;