import styled from "styled-components";

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 100%;
  padding: 0.7rem 1.7rem;
  margin: 0 auto;
  background-color: #06041c;
  border-radius: 2rem;
  border: 0.2rem solid #4e0eff;
  overflow: auto;
  ::-webkit-scrollbar {
    display: block;
    width: 0.3rem;
  }
  ::-webkit-scrollbar-track {
    background: #06041c;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #4e0eff;
  }
`;
