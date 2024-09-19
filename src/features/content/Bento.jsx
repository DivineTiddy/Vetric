import styled from "styled-components";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import Segmented from "../../ui/Segmented";
import Buttons from "../../ui/Buttons";
import ServiceIcon1 from "../../assets/icons/ServiceIcon1";
import ServiceIcon2 from "../../assets/icons/ServiceIcon2";
import ServiceIcon3 from "../../assets/icons/ServiceIcon3";
import ServiceIcon4 from "../../assets/icons/ServiceIcon4";
import ServiceIcon5 from "../../assets/icons/ServiceIcon5";
import TeamIcon from "../../assets/icons/TeamIcon";
import TeamIcon2 from "../../assets/icons/TeamIcon2";

const BentoLayout = styled.div`
  width: auto;
  height: 2091px;
  display: flex;
  align-content: center;
  gap: 53px;
  display: flex;
  flex-direction: column;
`;
const BentoParaContainer = styled.div`
  width: auto;
  height: 136px;
  display: flex;
  flex-direction: column;
  gap: 37px;
  text-align: center;
`;
const CalendarLayout = styled.div`
  width: auto;
  height: 1902px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;
const ServiceLayout = styled.div`
  width: 330px;
  height: 317px;
  display: flex;
  gap: 24.13px;
  padding: 24px;
  flex-direction: column;
  overflow: hidden;
`;
const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start !important;
  width: auto;
  height: 61.4px;
  gap: 16px;
`;
const StyledIcon = styled.div`
  width: 18.45px;
  height: 14.76px;
`;
const TeamLayout = styled.div`
  width: auto;
  height: 317px;
  padding: 24px;
  display: flex;
  gap: 45px;
  flex-direction: column;
  border: 1px solid #d3d3d6;
  border-radius: 16px;
`;
const TeamText = styled.div`
  width: 342px;
  height: 61.4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TeamIconLayout = styled.div`
  width: auto;
  height: 111.5px;
  position: relative;
`;
const IconLayout = styled.div`
  position: absolute;
`;
const TeamButtonLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bento = () => {
  return (
    <BentoLayout>
      {/* HEADING ..................... */}
      <BentoParaContainer>
        <Heading as="h3">Explore Our Feature</Heading>
        <Text type="Para2">
          Discover the powerful features that make our platform stand out
        </Text>
      </BentoParaContainer>
      {/* MAIN.......................... */}
      <CalendarLayout>
        <ServiceLayout>
          <TextLayout>
            <Heading type="ServiceText">Ready to go services</Heading>
            <Text type="Para7"> Streamlining solutions for swift success</Text>
          </TextLayout>
          {/* SEGMENTED 1 ......................... */}
          <Segmented>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon1 />
              </StyledIcon>
              Powerful APIs
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon2 />
              </StyledIcon>
              For Design
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon3 />
              </StyledIcon>
              Cybersecurity
            </Buttons>
          </Segmented>
          {/* SEGMENTED 2 ......................... */}
          <Segmented>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon4 />
              </StyledIcon>
              Colaborative teams
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon3 />
              </StyledIcon>
              For Design
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon5 />
              </StyledIcon>
              Cybersecurity
            </Buttons>
          </Segmented>
          {/* SEGMENTED 3 ......................... */}
          <Segmented>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon3 />
              </StyledIcon>
              Powerful APIs
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon1 />
              </StyledIcon>
              For Design
            </Buttons>
            <Buttons type="contact">
              <StyledIcon>
                <ServiceIcon5 />
              </StyledIcon>
              Cybersecurity
            </Buttons>
          </Segmented>
        </ServiceLayout>
        {/* TEAM LAYOUT ................... */}
        <TeamLayout>
          <TeamText>
            <Heading type="ServiceText">For growing teams</Heading>
            <Text type="Para7"> Tailored support to give you progress</Text>
          </TeamText>
          <TeamIconLayout>
            <IconLayout>
              <TeamIcon />
            </IconLayout>
            {/* BUTTON .............. */}
            <TeamButtonLayout>
              <Buttons type="TeamBtn">
                <StyledIcon>
                  <TeamIcon2 />
                </StyledIcon>
                Invite user to this team
              </Buttons>
            </TeamButtonLayout>
          </TeamIconLayout>
        </TeamLayout>
      </CalendarLayout>
    </BentoLayout>
  );
};

export default Bento;
