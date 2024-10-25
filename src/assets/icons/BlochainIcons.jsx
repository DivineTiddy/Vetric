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
  width: auto;
  height: auto;
  animation: ${rotate} 10s linear infinite; /* Animation properties */

`;
const BlochainIcons = () => {
  return (
   <Layout>
    <img style={{width:"auto"}} src={blockchainImages}/>
   </Layout>
  );
};

export default BlochainIcons;
