import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 5rem);
  background: ${(props) => props.theme.bg.tertiary};
  div{
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
    p{
    }
  }
`;

