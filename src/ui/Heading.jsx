import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      display: flex;
      height: 170.631px;
      flex-direction: column;
      justify-content: center;
      align-self: stretch;
      color: var(--colors-alias-black-white-black-900, #07070a);
      text-align: center;
      font-family: "Roboto Slab";
      font-size: 47.316px;
      font-style: normal;
      font-weight: 900;
      line-height: 61.3px; /* 129.555% */
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      text-align: center;
      font-family: Manrope;
      font-size: 17.859px;
      font-style: normal;
      font-weight: 700;
      line-height: 25.2px; /* 141.102% */
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      text-align: center;
      font-family: Manrope;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px; /* 120% */
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      color: var(--colors-alias-black-white-black-500, #212333);
      text-align: center;
      font-family: Manrope;
      font-size: 21px;
      font-style: normal;
      font-weight: 400;
      line-height: 29.4px; /* 140% */
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      color: var(--colors-alias-black-white-black-900, #07070a);
      font-family: "Blanc Groove";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `}
    ${(props) =>
    props.type === "ServiceText" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      text-align: start;
      font-family: Manrope;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22.4px; /* 141.102% */
    `}
    ${(props) =>
    props.as === "p" &&
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
    props.as === "Para2" &&
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
    props.as === "Para3" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}
    ${(props) =>
    props.as === "Para4" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}
    ${(props) =>
    props.as === "Para5" &&
    css`
      color: #a4a7ae;
      font-family: "DM Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25.2px; /* 140% */
    `}
    ${(props) =>
    props.as === "Para6" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      color: var(--colors-alias-black-white-black-800, #0d0e14);
      font-family: Manrope;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 48px; /* 120% */
    `}
`;

export default Heading;
