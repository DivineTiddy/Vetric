import styled, { css } from "styled-components";

const Buttons = styled.button`
  ${(props) =>
    props.type === "active" &&
    css`
      width: auto;

      background: var(--colors-alias-Main-brand-500, #96ea63);
      color: var(--colors-alias-Main-brand-900, #1e2f14);
      border: none;
      /* &:hover {
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: var(--colors-alias-black-white-black-900, #07070a);
        background-color: #F4F4F5;
      } */
    `}

  ${(props) =>
    props.type === "contact" &&
    css`
      width: auto;
      border: 1px solid rgba(0, 0, 0, 0.5);
      color: var(--colors-alias-black-white-black-900, #07070a);
      &:hover {
        background: var(--colors-alias-Main-brand-500, #96ea63);
        color: var(--colors-alias-Main-brand-900, #1e2f14);
        border: none;
        transition: background 0.5s ease;
      }
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
    props.type === "submit" &&
    css`
      width: auto;
      background-color: #0d0e14;
      color: var(--colors-alias-black-white-black-900, #ffffff);
    `}
    ${(props) =>
    props.type === "TeamBtn" &&
    css`
      width: 206.5px;
      height: 52px;
      border-radius: 80px;
      border: 0.5px solid #7a7b85;
    `}
    ${(props) =>
    props.type === "NotActivePrice" &&
    css`
      color: var(--colors-alias-black-white-white, #fff);
      font-family: Manrope;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 16.9px */
      background-color: inherit;
      border: none;
    `}
     ${(props) =>
    props.type === "ActivePrice" &&
    css`
      line-height: 130% !important; /* 16.9px */
      font-size: 13px !important;
      padding: 3px 8px !important;
      border-radius: 100px !important;
      background: var(--colors-alias-black-white-white, #fff);
      transition: background 0.5s ease;
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
  cursor: pointer;
  border: none;
`;

export default Buttons;
