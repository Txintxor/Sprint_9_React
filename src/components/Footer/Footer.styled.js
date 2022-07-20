import styled from "styled-components";
import {whiteC, barBack} from "../styled-c/styled-components";

export const Foot = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  padding: .5rem 0;
  flex-direction: row;
  justify-content: center;
  background: ${barBack};
  color: ${whiteC};
`;
