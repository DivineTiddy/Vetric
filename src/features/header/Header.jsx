import styled from "styled-components";
import Logo from "../../assets/icons/Logo";
import MenuBar from "../../assets/icons/MenuBar";
import Nav from "../../ui/Nav";
import Buttons from "../../ui/Buttons";

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
  width: 40px;
  height: 35;

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
  return (
    <HeaderNav>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuBarLayout>
        <MenuBar />
      </MenuBarLayout>
      <SocialContent>
        <Nav />
      </SocialContent>
      <UserLayout>
        <Buttons type="active">Sign up</Buttons>
      </UserLayout>
    </HeaderNav>
  );
};

export default Header;
