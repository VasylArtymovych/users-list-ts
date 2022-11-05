import styled from "styled-components";

export const Btn = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  color: #4e0eff;
  background-color: #997af0;
  border: 0.1rem solid #4e0eff;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    color: #997af0;
    background-color: #4e0eff;
    border: 0.1rem solid #997af0;
  }
`;
