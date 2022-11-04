import styled from 'styled-components';

export const ListContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  height: 45rem;
  padding: 0.7rem 0;
  margin: 0 auto;
  background-color: #06041c;
  border-radius: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
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
