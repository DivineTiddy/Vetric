import styled , {keyframes} from "styled-components";
import blockchainImages from "../Image/Vertical container.png"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`
const Layout = styled.div`
  width: 342px;
  height: 223px;
  animation: ${rotate} 10s linear infinite; /* Animation properties */

`;
const BlochainIcons = () => {
  return (
   <Layout>
    <img src={blockchainImages}/>
   </Layout>
  );
};

export default BlochainIcons;
