import styled from "styled-components";

export const Body = styled.div`
  display: flex;
`;

export const MobileContainer = styled.div`
  display: none;

  @media(max-width: 900px){
    display: block;
  }
`