import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  padding: 3rem;
  .body{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .card{
      width: 20vw;
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
      }
    }
  }
`;