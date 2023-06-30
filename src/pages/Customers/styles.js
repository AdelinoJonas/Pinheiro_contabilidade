import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  padding: 3rem;
  .body{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    /* @media(max-width: 700px){
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } */

    .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-bottom: 14vh;

      img{
        width: 20vw;
        background-color: #fff;
        border-radius: 24px;
        @media(max-width: 700px){
          width: 30vw;
          height: 30vw;
        }
      }
    }
  }
`;