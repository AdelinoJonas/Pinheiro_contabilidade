import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.secundary};

  .content{
    padding: 3rem;
    .header{
      display:"flex";
      justify-content: "center";
      align-items:"center";
      margin-bottom: "5rem";
        .logoPage{
          border-radius: 25px;
          margin-left: 5%;
        }
    }

    div{
      display: flex;
      flex-direction: column;
      
      .company{
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.title};
        font-weight: ${props => props.theme.weightFonts.title};
        margin: 3rem 0 3rem 1rem;
        display: flex;
        align-self: flex-start;
      }

      .row{
        display: flex;
        flex-direction: row;

        .right{
          width: 50%;
          height: 100%;
          display: flex;
          align-items: end;
          justify-content: center;
          img{
            width: 100%;
            border-radius: 20px;
            box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
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
        margin-top: 5rem;
        padding-top: 3rem;
        text-align: center;
        line-height: 150%;
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.text};
        font-weight: ${props => props.theme.weightFonts.text};
        gap: 5rem;
        
        div{
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          
          p{
            background-color: ${props => props.theme.bg.sideFilter};
            padding: 2rem;
            margin: 2.5rem;
            border-radius: 20px;
            text-align: justify;
            box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
          }
        }

        .contactButtomBox{

          button{
            all: unset;
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 2rem 2rem;
            color: ${props => props.theme.color.text};
            font-size: ${props => props.theme.sizeFonts.subtitle};
            font-weight: ${props => props.theme.weightFonts.title};
            background: ${props => props.theme.bg.sideFilter};
            border-radius: 6px;
            border: 1px solid rgba(0,0,0,4);
            box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
            -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
                
            @media(max-width: 900px){
              position: absolute;
              left: 5rem;
            } 

            &:hover{
              opacity: 0.8;
              transition: all 0.2s;
            }
          }
        }

      }
    
      .mission{
        border-top: 1px solid ${props => props.theme.color.text};;
        color: ${props => props.theme.color.text};
        font-size: ${props => props.theme.sizeFonts.title};
        font-weight: ${props => props.theme.weightFonts.title};
        margin: 5rem 0 3rem 0;
        text-align: center;
        padding-top: 5rem;
        
      }
    }

    .subtitle{
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.subtitle};
      font-weight: ${props => props.theme.weightFonts.text};
      text-align: center;
      margin-bottom: 5rem;
      padding: 0 2rem 0 2rem;
    }

    .subtitle2{
      color: ${props => props.theme.color.text};
      font-size: ${props => props.theme.sizeFonts.subtitle};
      font-weight: ${props => props.theme.weightFonts.text};
      text-align: center;
      margin-bottom: 5rem;
      padding: 0 2rem 0 2rem;
      margin-top: 5rem;
    }

    ul{
      gap: 5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 35% 35% ;
      grid-template-areas: "description"
                            "topics center topics";
      margin-bottom: 5rem;
      li{
        all: unset;
        color: ${props => props.theme.color.text};
        background-color: ${props => props.theme.bg.sideFilter};
        border-radius: 20px;
        text-align: center;
        box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
        -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
        -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 3rem;
        span {
          font-size: ${props => props.theme.sizeFonts.titleCards};
          font-weight: ${props => props.theme.weightFonts.title};
        }

        p {
          font-size: ${props => props.theme.sizeFonts.text};
          font-weight: ${props => props.theme.weightFonts.subtitle};
          text-align: justify;
          line-height: 150%;
        }
      }
    }
  }

  /* .contactButton{
    img{
      display: flex;
      justify-content: end;
      align-items: end;
      height: 4rem;
      cursor: pointer;
    }
  } */

  .footer{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 10rem;
      margin-left: 80%;
      margin: 5rem 0 3rem 85%
    }
  }
`;

export const ImageOffice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12rem;

  img{
    width: 70%;
    margin-top: 4rem;
    border-radius: 10%;
    box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -webkit-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
    -moz-box-shadow: 9px 11px 23px -2px rgba(0,0,0,0.76);
  }
`;
