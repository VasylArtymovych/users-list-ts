import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  background-color: #00000076;
  border-radius: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    color: white;
    background-color: transparent;
    border: 0.1rem solid #997af0;
    border-radius: 0.4rem;
    &:focus {
      border: 0.1rem solid #4e0eff;
      outline: none;
    }
  }

  .submit_btn {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #997af0;
    color: white;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }

  .close_btn {
    position: absolute;
    top: 0.6rem;
    right: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    padding: 0.2rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #997af0;
    color: white;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
