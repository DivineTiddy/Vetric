import styled from "styled-components";
import Heading from "../../ui/Heading";
import Buttons from "../../ui/Buttons";
import Arrow from "../../assets/icons/Arrow";
const HerroContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;
const ButtonLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: auto;
`;

const Herro = () => {
  return (
    <HerroContainer>
      <Heading as="h1">
        Build the <br /> Future <br /> with Web
      </Heading>
      <Heading as="h4">
        Discover how we can help you connect with the next generation of the
        internet.
      </Heading>
      <ButtonLayout>
        <Buttons type="active">Signup<Arrow/></Buttons>
        <Buttons type="contact">Contactsales</Buttons>
      </ButtonLayout>
    </HerroContainer>
  );
};

export default Herro;
