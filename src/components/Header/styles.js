import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.bg.primary};
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  section{
    margin: 2rem;
  }
  
`;

export const Logo = styled.div`
  background-color: #fff;
  border-radius: 6px;
  margin: 1rem;
  width: 80vw;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50vw;
    height: 90%;
  }
`;

