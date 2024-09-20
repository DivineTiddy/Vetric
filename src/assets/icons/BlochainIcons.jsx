import styled from "styled-components";
import blockchainImages from "../Image/Vertical container.png"

const Layout = styled.div`
  width: 342px;
  height: 223px;
`;
const BlochainIcons = () => {
  return (
   <Layout>
    <img src={blockchainImages}/>
   </Layout>
  );
};

export default BlochainIcons;
