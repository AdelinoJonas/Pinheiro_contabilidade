import styled from "styled-components";

export const ImageContainer = styled.div`
  background: ${(props) => props.theme.bg.secundary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5rem 0 5rem 0;
  min-height: 100vh;
`;

export const Image = styled.img`
  width: 250px;
  height: 300px;
  cursor: pointer;
  border: 1px solid #000; 
  border-radius: 12px;
  margin-bottom: 5rem;
`;

