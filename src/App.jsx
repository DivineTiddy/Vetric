import styled from "styled-components";
import Header from "./features/header/Header";
import Main from "./features/content/Main";

const StyleApp = styled.div`
  width: 100%;
  height: 419.6875rem;
`;

function App() {
  
  return (
    
      <StyleApp>
        <Header />
        <Main />
      </StyleApp>
    
  );
}

export default App;
