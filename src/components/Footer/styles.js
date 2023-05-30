import styled from "styled-components";

export const Container = styled.nav`
  background: ${(props) => props.theme.bg.primary};
  height: 6rem;
  h1{
  color: ${props => props.theme.color.links};
  }
`;