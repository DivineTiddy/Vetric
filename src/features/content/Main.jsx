import styled from "styled-components";
import Herro from "./Herro";
import Perks from "./Perks";
import Companies from "./Companies";
import Pricing from "./Pricing";
import Bento from "./Bento";

const MainContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 83px;
  margin: 32.8px 0px
  
`;
const Main = () => {
  return(
    <MainContent>
  <Herro/>
  <Perks/>
  <Companies/>
  <Pricing/>
  <Bento/>
  </MainContent>
  );
};

export default Main;
/* 
const Main = () => {
  return (
    <div>
      
    </div>
  )
}

export default Main */
