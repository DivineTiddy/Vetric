import styled from "styled-components";
import Logo from "../../assets/icons/Logo";
import MenuBar from "../../assets/icons/MenuBar";
import Nav from "../../ui/Nav";
import Buttons from "../../ui/Buttons";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0%;
  z-index: 10;
 
`;
const Toggle = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.2); /* Light color with transparency */
  backdrop-filter: blur(10px); /* Blur to create frosted glass effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari compatibility */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  @media (min-width: 700px) {
    display: none;
  }
`;
const HeaderNav = styled.div`
  display: flex;
  width: 100%;
  height: 71px;
  padding: 0px 0px;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--colors-alias-black-white-black-200, #a6a7ad);
  background: var(--colors-alias-black-white-white, #fff);
  backdrop-filter: blur(5.449999809265137px);
`;
const LogoContainer = styled.div`
  width: 160px;
  height: 35.31px;
`;
const MenuBarLayout = styled.div`
  width: auto;
  height: 35;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
const SocialContent = styled.div`
  display: none;
  @media (min-width: 700px) {
    width: 446px;
    height: 39px;
    display: flex;
    width: 360px;
    align-items: center;
    justify-content: space-around;
  }
`;
const UserLayout = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    width: 118px;
    height: 40px;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <HeaderNav>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuBarLayout onClick={() => setOpen((el) => !el)}>
          <MenuBar />
        </MenuBarLayout>
        <SocialContent>
          <Nav />
        </SocialContent>
        <UserLayout>
          <Buttons type="active">Sign up</Buttons>
        </UserLayout>
      </HeaderNav>
      {open && (
        <Toggle>
          <Nav />
        </Toggle>
      )}
    </Container>
  );
};

export default Header;
