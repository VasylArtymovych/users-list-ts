import styled from "styled-components";

export const CardContainer = styled.div`
  width: 28rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #997af0;
  border-radius: 1rem;
  border: 0.2rem solid #4e0eff;
  cursor: grab;

  span.order {
    padding: 0.5rem;
    min-width: 2.1rem;
    font-size: 1.2rem;
    background-color: transparent;
    border-radius: 50%;
    border: 0.2rem solid #4e0eff;
  }

  h2,
  p {
    font-size: 2rem;

    span {
      font-size: 1.5rem;
      margin-right: 0.25rem;
      font-weight: normal;
      margin-right: 0.3rem;
    }
  }
  button {
    width: 3rem;
    height: 3rem;
    font-size: 1.3rem;
    color: white;
    background-color: #4e0eff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #6f49d7;
      border: 0.2rem solid #4e0eff;
    }
  }

  input {
    height: 1.5rem;
    padding-left: 0.5rem;
    border: none;
    outline: none;
    color: white;
    background-color: #4e0eff;
  }
`;
