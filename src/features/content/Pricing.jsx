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
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
const TestEnvironment = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 40px;
  width: auto;
  height: 249px;
  border: 1px solid var(--colors-alias-black-white-black-400, #d3d3d6);
  flex-wrap: wrap;
  padding: 24px;
  border-radius: 16px;
`;
const TextContainer = styled.div`
  width: auto;
  height: 121px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyleArrow = styled.div`
  width: 6px;
  height: auto;
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
        {/* TEST ENVIROMENT .................. */}
        <TestEnvironment>
          <TextContainer>
            <Heading>Unlock the Power of Web3 Today!</Heading>
            <Text type="para6">
              Join us on the journey to the decentralized future.
            </Text>
          </TextContainer>
          <Buttons type="active">
            Get Started with
            <StyleArrow>
              <Arrow />
            </StyleArrow>
          </Buttons>
        </TestEnvironment>
      </PlansLayout>
    </PriceLayout>
  );
};

export default Pricing;
