import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "aside main";
`;

export const Aside = styled.aside`
  grid-area: aside;
`

export const MobileContainer = styled.div`
  display: none;

  @media(max-width: 900px){
    display: block;
    grid-area: main;
  }
`
export const Main = styled.div`
  grid-area: main;
`