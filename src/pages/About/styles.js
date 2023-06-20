import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  padding: 3rem;

  .logoPage{
    width: 70%;
    height: 22vh;
    border-radius: 25px;
    margin-left: 5%;
  }

  
  div{
    display: flex;
    flex-direction: column;
    
    .company{
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.title};
      font-weight: ${props => props.theme.weightFonts.title};
      margin: 10rem 0 3rem 0;
      text-align: start;
    }

    .row{
      display: flex;
      flex-direction: row;

      .right{
        width: 50%;
        height: 50%;
        margin-top: -10rem;
        img{
          border-radius: 20px;
        }
        
      }

      .left{
        width: 50%;
        height: 50%;
        gap: 2rem;

        p{
          width: 90%;
          text-align: justify;
          line-height: 150%;
          color: ${props => props.theme.color.text};
          font-size: ${props => props.theme.sizeFonts.text};
          font-weight: ${props => props.theme.weightFonts.text};
        }
      }
    }

    .full-row{
      margin-top: 3rem;
      border-top: 1px solid ${props => props.theme.color.text};
      padding-top: 3rem;
      text-align: center;
      line-height: 150%;
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.text};
      font-weight: ${props => props.theme.weightFonts.text};
      gap: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      p{
        background-color: ${props => props.theme.bg.sideFilter};
        padding: 2rem;
        border-radius: 20px;
      }
    }

    h1{
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.title};
      font-weight: ${props => props.theme.weightFonts.title};
      margin: 10rem 0 3rem 0;
      text-align: center;
    }
  }

  .subtitle{
    color: ${props => props.theme.color.text};
    font-size: ${props => props.theme.sizeFonts.subtitle};
    font-weight: ${props => props.theme.weightFonts.text};
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 2rem 0 2rem;
  }

  .subtitle2{
    color: ${props => props.theme.color.text};
    font-size: ${props => props.theme.sizeFonts.subtitle};
    font-weight: ${props => props.theme.weightFonts.text};
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 2rem 0 2rem;
    margin-top: 5rem;
  }

  ul{
    gap: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50% 50% 50% ;
    grid-template-areas: "description"
                          "topics center topics";
    li{
      all: unset;
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.subtitle};
      font-weight: ${props => props.theme.weightFonts.subtitle};
      background-color: ${props => props.theme.bg.sideFilter};
      padding: 1rem;
      border-radius: 20px;
      text-align: center;
      span{
        width: 100%;
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.subtitle};
        font-weight: ${props => props.theme.weightFonts.title};
        padding-bottom: 1rem;
      }
    }
  }
  .values{
    margin-bottom: 5rem;
  }
`;

export const ImageOffice = styled.div`
display: flex;
align-items: center;
  img{
    width: 70%;
    margin-top: 4rem;
    border-radius: 10%;
  }
`;
