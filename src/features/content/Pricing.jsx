import styled from "styled-components";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import ListOfPrice from "./ListOfPrice";
import Buttons from "../../ui/Buttons";
import Arrow from "../../assets/icons/Arrow";

const PriceLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
`;
const PriceContainer = styled.div`
  display: flex;
  width: 361px;
  flex-direction: column;
  align-items: center;
  gap: 37px;
`;
const ExpolreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;
const DateLayout = styled.div`
  width: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid var(--colors-alias-black-white-black-400, #4d4f5c);
  background: var(--colors-alias-black-white-black-900, #07070a);
`;
const DateButton = styled.div`
  color: var(--colors-alias-black-white-white, #fff);
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 16.9px */
`;
const ActiveDateButton = styled.button`
  padding: 3px 8px;
  border-radius: 100px;
  background: var(--colors-alias-black-white-white, #fff);
`;
const PlansLayout = styled.ul`
  width: auto;
  display: flex;
  height: auto;
  padding: 20px 0px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  /* @media (min-width: 700px) {
    flex-direction: row;
  } */
  /* 
  @media (min-width: 700px) {
    flex-direction: row;
    gap: 32px;
  } */
`;
const TestEnvironment = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 40px;
  width: auto;
  height: 249px;
  border: 1px solid var(--colors-alias-black-white-black-400, #d3d3d6);
  /* flex-wrap: wrap; */
  padding: 20px 0px;
  border-radius: 16px;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 142px;
    width: 100%;

  }
`;
const TextContainer = styled.div`
  width: 342px;
  height: 121px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 700px) {
    width: 506px;
    height: 93px;
  }
`;
const StyleArrow = styled.div`
  width: 6px;
  height: auto;
`;
const ButtonContainer = styled.div`
  @media (min-width: 700px) {
    width: 151px;
    height: 40px;
  }
`;

const Pricing = () => {
  return (
    <PriceLayout>
      <PriceContainer>
        <Heading as="h3">Pricing</Heading>
        <ExpolreContainer>
          <Text type="Para2">
            Explore our pricing plans tailored to fit your needs.
          </Text>
          <DateLayout>
            <DateButton>Montly</DateButton>
            <ActiveDateButton>Yearly •20% off</ActiveDateButton>
          </DateLayout>
        </ExpolreContainer>
      </PriceContainer>
      {/* PRICE LIST ................. */}
      <PlansLayout>
        <ListOfPrice />
      </PlansLayout>
      {/* TEST ENVIROMENT .................. */}
      <PlansLayout>
        <TestEnvironment>
          <TextContainer>
            <Heading>Unlock the Power of Web3 Today!</Heading>
            <Text type="para6">
              Join us on the journey to the decentralized future.
            </Text>
          </TextContainer>
          <ButtonContainer>
            <Buttons type="active">
              Get Started with
              <StyleArrow>
                <Arrow />
              </StyleArrow>
            </Buttons>
          </ButtonContainer>
        </TestEnvironment>
      </PlansLayout>
    </PriceLayout>
  );
};

export default Pricing;
