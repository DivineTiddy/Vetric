import styled from "styled-components";
import Heading from "../../ui/Heading";
import Logo1 from "../../assets/icons/Logo1";
import Logo2 from "../../assets/icons/Logo2";
import Logo3 from "../../assets/icons/Logo3";
import Logo4 from "../../assets/icons/Logo4";

const CompaniesLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  overflow: hidden;
`;
const IconsLayout = styled.div`
  display: flex;
  width: 726.773px;
  justify-content: space-between;
  align-items: center;
`;
const Companies = () => {
  return (
    <CompaniesLayout>
      <Heading as="h1">Trusted by the world leaders</Heading>
      <IconsLayout>
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo1 />
        <Logo2 />
      </IconsLayout>
    </CompaniesLayout>
  );
};

export default Companies;
