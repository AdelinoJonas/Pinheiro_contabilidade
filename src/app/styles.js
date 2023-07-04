import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "aside main";

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: "35vh 70vh";
    grid-template-areas:
      "header"
      "body";
  }
`;

export const Aside = styled.aside`
  grid-area: aside;
`;

export const MobileContainer = styled.div`
  width: 100vw;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    z-index: 588;
    grid-area: header;
  }
`;

export const Main = styled.div`
  grid-area: main;
  @media (max-width: 900px) {
    display: block;
    grid-area: body;
    margin-top: 15vh;
  }
`;
