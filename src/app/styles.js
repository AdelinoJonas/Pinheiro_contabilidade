import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "aside main";
  
  @media(max-width: 900px){
    grid-template-columns: 1fr;
    grid-template-rows: "30vh 70vh";
    grid-template-areas: "header" 
                          "body";
  }
`;

export const Aside = styled.aside`
  grid-area: aside;
`

export const MobileContainer = styled.div`

  @media(max-width: 900px){
    display: block;
    grid-area: header;
    /* margin-left: 20px */
  }
`

export const Main = styled.div`
  grid-area: main;
  @media(max-width: 900px){
    display: block;
    grid-area: body;
  }
`