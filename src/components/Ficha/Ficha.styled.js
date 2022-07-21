import styled from "styled-components";
import { whiteC, border } from "../styled-c/styled-components";

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const OutputContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  &:media (max-width: 900px) {
    width: fit-content;
  }
`;

export const InputField = styled.input`
  width: 15rem;
  height: 1.5rem;
  padding: 0.35rem;
  margin: 1rem 0;
  border: 2px solid ${border};
  border-radius: 4px;
`;

export const OutputList = styled.ul`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  background-color: ${whiteC};
  height: fit-content;
`;
export const FormList = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${border};
  border-radius: 4px;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem;
  font: inherit;
  color: inherit;
`;


