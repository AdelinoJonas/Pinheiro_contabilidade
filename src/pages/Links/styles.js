import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.sideFilter};
  padding-bottom: 15vh;
  .header{
    background: ${(props) => props.theme.bg.sideFilter};
    color: ${(props) => props.theme.bg.sideFilter};
  }
  .body{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;

    .card{
      width: 20vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      cursor: pointer;

      .bg-img{
        background-color: #fff;
        border-radius: 24px;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 60%;
          height: 60%;
        }
      }
      .titleCard{
        text-align: center;
        margin-top: 1rem;
        span{
          color: ${props => props.theme.color.text};
          font-size: ${props => props.theme.sizeFonts.subtitle};
          font-weight: ${props => props.theme.weightFonts.title1};
          text-transform: uppercase;
        }
      }
    }
  }
`;

