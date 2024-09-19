import styled, { css } from "styled-components";

const Buttons = styled.button`
  ${(props) =>
    props.type === "active" &&
    css`
      background: var(--colors-alias-Main-brand-500, #96ea63);
      color: var(--colors-alias-Main-brand-900, #1e2f14);
      border: none;
    `}

  ${(props) =>
    props.type === "contact" &&
    css`
    width: auto;
      border: 1px solid rgba(0, 0, 0, 0.5);
      color: var(--colors-alias-black-white-black-900, #07070a);
    `}
    ${(props) =>
    props.as === "StartedBtn" &&
    css`
      width: 300px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: white;
    `}
    ${(props) =>
    props.type === "TeamBtn" &&
    css`
      width: 206.5px;
      height: 52px;
      border-radius: 80px;
      border: 0.5px solid #7A7B85;
    `}
    display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px; /* 137.143% */
`;

export default Buttons;
