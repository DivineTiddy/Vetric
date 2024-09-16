import styled, { css } from "styled-components"

const Text = styled.p`
${(props) =>
    props.type === "Para1" &&
    css`
      color: var(--colors-alias-black-white-black-400, #4d4f5c);
      font-family: Urbanist;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 133.333% */
      align-self: stretch;
    `}
    ${(props) =>
    props.type === "Para2" &&
    css`
      color: #a4a7ae;
      text-align: center;
      font-family: "DM Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25.2px; /* 140% */
    `}
    ${(props) =>
    props.type === "Para3" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}
    ${(props) =>
    props.type === "Para4" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}
    ${(props) =>
    props.type === "para5" &&
    css`
      color: #a4a7ae;
      font-family: "DM Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25.2px; /* 140% */
      
    `}
    ${(props) =>
    props.type === "para6" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}
`


export default Text
