import styled from "styled-components";
import Logo from "../../assets/icons/Logo";
import MenuBar from "../../assets/icons/MenuBar";

const HeaderNav = styled.div`
  display: flex;
  width: 100%;
  height: 71px;
  padding: 0px 0px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--colors-alias-black-white-black-200, #a6a7ad);
  background: var(--colors-alias-black-white-white, #fff);
  backdrop-filter: blur(5.449999809265137px);
`;
const MenuBarLayout = styled.div`
  width:100%;
  height: 35;
`

const Header = () => {
  return (
    <HeaderNav>
      <Logo />
      <MenuBarLayout>
      <MenuBar />
      </MenuBarLayout>
    </HeaderNav>
  );
};

export default Header;
