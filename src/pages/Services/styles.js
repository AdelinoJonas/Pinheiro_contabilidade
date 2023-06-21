import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.tertiary};

  div{ 
    background-color: black;
    .sectionBox{
      background-color: #fff;
      height: 100vh;
    }
  }
`;

