import styled from "styled-components";
import PriceList from "../../ui/PriceList";
import Buttons from "../../ui/Buttons";
import Arrow from "../../assets/icons/Arrow";
import Up from "../../assets/icons/Up";
import Text from "../../ui/Text";
import Popular from "../../assets/icons/Popular";

const price = [
  {
    plan: "Basic",
    amount: 9.99,
    info: "Essential features for beginners.",
    details1: "Basic Platform Access",
    details2: "Email Support",
    details3: "Limited Data Storage",
  },
  {
    plan: "Pro",
    amount: 19.99,
    info: "Advanced tools for growth.",
    details1: "Full Platform Access",
    details2: "Email and Chat Support",
    details3: "Unlimited Data Storage",
  },
  {
    plan: "Premium",
    amount: 29.99,
    info: "Top-tier support and customization.",
    details1: "Advanced Platform Access",
    details2: "24/7 Support via Chat, and Phone",
    details3: "Customized Features",
  },
];
const AmountLayout = styled.div`
  display: flex;
  height: 193px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  width: 342px;
`;
const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;
const BenefitList = styled.li`
  display: flex;
  height: 40px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;
const StyleArrow = styled.div`
  width: 6px;
  height: auto;
`;
const UpLayout = styled.div`
  width: 23px;
  height: 23px;
`;
const PopupLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PopupSvg = styled.div`
  width: 96;
  height: 28;
  display: flex;
  justify-content: flex-end;
  margin-left: 100px;
`;

const ListOfPrice = () => {
  return (
    <>
      {price.map((items) => (
        <PriceList key={items.plan} type="priceList1">
          <AmountLayout>
            <PopupLayout>
              <Text type="para3">{items.plan}</Text>
              {items.plan === "Pro" ? (
                <PopupSvg>
                  <Popular />
                </PopupSvg>
              ) : (
                ""
              )}
            </PopupLayout>
            <Text type="para4">${items.amount} /month</Text>
            <Text type="para5">{items.info}</Text>

            <Buttons type="contact">
              Get Started with {items.plan}{" "}
              <StyleArrow>
                <Arrow />
              </StyleArrow>
            </Buttons>
          </AmountLayout>
          <Benefits>
            <BenefitList>
              <UpLayout>
                <Up />
              </UpLayout>
              <Text type="para6">{items.details1}</Text>
            </BenefitList>
            <BenefitList>
              <UpLayout>
                <Up />
              </UpLayout>
              <Text type="para6">{items.details2}</Text>
            </BenefitList>
            <BenefitList>
              <UpLayout>
                <Up />
              </UpLayout>
              <Text type="para6">{items.details3}</Text>
            </BenefitList>
          </Benefits>
        </PriceList>
      ))}
    </>
  );
};

export default ListOfPrice;
