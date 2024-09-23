import styled from "styled-components";
import Nav from "../../ui/Nav";
import Logo from "../../assets/icons/Logo";
import Text from "../../ui/Text";
import Insta from "../../assets/icons/Insta";
import Facebook from "../../assets/icons/Facebook";
import YouTube from "../../assets/icons/YouTube";
import Linkdln from "../../assets/icons/Linkdln";
import Twitter from "../../assets/icons/Twitter";

const FooterLayout = styled.div`
  width: auto;
  height: 344px;
  display: flex;
  flex-direction: column;
  margin-top: 156px;
  padding: 35px 20px;
  gap: 33px;
  @media (min-width: 700px) {
    margin-top: 85px;
    height: 258px;


  }
`;
const TextContainer = styled.div`
  width: auto;
  height: 95.31px;
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const LogoContainer = styled.div`
  width: 160px;
  height: 35px;
`;
const MediaContainer = styled.div`
  width: auto;
  height: 112px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  align-items: end;
`;
const System = styled.div`
  width: 154px;
  height: 29px;
  border: 1px solid #4d4f5c;
  border-radius: 34px;
  padding: 3px 12px;
  gap: 8px;
  display: flex;
  align-items: center;
`;
const Indecator = styled.div`
  width: 6px;
`;
const SocialLayout = styled.div`
  width: 285px;
  height: 22px;
  display: flex;
  justify-content: space-between;
`;
const TextLayout = styled.div`
  width: auto;
  text-align: end;
`

const FooterSection = () => {
  return (
    <FooterLayout>
      <TextContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Nav />
      </TextContainer>
      <svg
        width="391"
        height="2"
        viewBox="0 0 391 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_2043_3620)">
          <path d="M0.5 0.656738H390.5" stroke="#4D4F5C" />
        </g>
        <defs>
          <filter
            id="filter0_b_2043_3620"
            x="-10.4"
            y="-10.7433"
            width="411.8"
            height="22.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.45" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2043_3620"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2043_3620"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <MediaContainer>
        <System>
          <Indecator>
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.5" cy="3.5" r="3" fill="#11A844" />
            </svg>
          </Indecator>
          <Text type="Para8">Operating System</Text>
        </System>
        
        <SocialLayout>
          <Insta />
          <Facebook />
          <YouTube />
          <Linkdln />
          <Twitter />
        </SocialLayout>
        <TextLayout>
         <Text type="Para8">
         VETRIC - 2024
         </Text>
        </TextLayout>
       
      </MediaContainer>
    </FooterLayout>
  );
};

export default FooterSection;
