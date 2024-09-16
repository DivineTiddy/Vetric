import styled, { css } from "styled-components";

const PriceList = styled.li`
  ${(props) =>
    props.as === "li" &&
    css`
      border-radius: 12px;
    `}
    margin:20px 0px;
  display: flex;
  height: 423px;
  width: auto;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  border: 0.5px solid var(--colors-alias-black-white-black-200, #a6a7ad);
  background: var(--colors-alias-black-white-white, #fff);
  backdrop-filter: blur(12.899999618530273px);
`;

export default PriceList;
