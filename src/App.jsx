import styled from "styled-components";
import Header from "./features/header/Header";
import Main from "./features/content/Main";
import FooterSection from "./features/footer/FooterSection";

const StyleApp = styled.div`
  width: 100%;
  height: auto;
 
`;

function App() {
  
  return (
    
      <StyleApp>
        <Header />
        <Main />
        <FooterSection/>
      </StyleApp>
    
  );
}

export default App;
