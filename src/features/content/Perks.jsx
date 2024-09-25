import styled from "styled-components";
import Heading from "../../ui/Heading";
import CrossChain from "../../assets/icons/CrossChain";
import Decent from "../../assets/icons/Decent";
import Asset from "../../assets/icons/Asset";
import Data from "../../assets/icons/Data";
import Text from "../../ui/Text";

const PerksLayout = styled.ul`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 41px 76px;
  flex-wrap: wrap;
`;
const PerksList = styled.li`
  display: flex;
  width: 252px;
  height: 76px;
  min-width: 252px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;
const StyleSvg = styled.div`
  width: 31px;
  height: auto;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;

const Perks = () => {
  return (
    <PerksLayout>
      {/* FIRST LIST ............................. */}
      <PerksList>
        <Section>
          <StyleSvg>
            <CrossChain />
          </StyleSvg>
          <Heading as="h5">Cross-Chain Access</Heading>
        </Section>
        <Text type="Para1">
          Seamlessly interact with diverse blockchain networks.
        </Text>
      </PerksList>
      {/* SECOND LIST ............................. */}
      <PerksList>
        <Section>
          <StyleSvg>
            <Decent />
          </StyleSvg>
          <Heading as="h5">Decentralized Identity</Heading>
        </Section>
        <Heading as="p">
          Securely manage your digital identity across applications.
        </Heading>
      </PerksList>
      {/* THIRD LIST ............................. */}
      <PerksList>
        <Section>
          <StyleSvg>
            <Asset />
          </StyleSvg>
          <Heading as="h5">Asset Tokenization</Heading>
        </Section>
        <Text type="Para1">
          Digitally tokenize real-world assets for efficient management.
        </Text>
      </PerksList>
      {/* FOURTH LIST ............................. */}
      <PerksList>
        <Section>
          <StyleSvg>
            <Data />
          </StyleSvg>
          <Heading as="h5">Interoperable Data Exchange</Heading>
        </Section>
        <Text type="Para1">
          Exchange data seamlessly between applications for collaboration.
        </Text>
      </PerksList>
       {/* FOURTH LIST ............................. */}
       <PerksList>
        <Section>
          <StyleSvg>
            <Data />
          </StyleSvg>
          <Heading as="h5">Asset Tokenization</Heading>
        </Section>
        <Text type="Para1">
        Digitally tokenize real-world assets for efficient management.
        </Text>
      </PerksList>
       {/* FOURTH LIST ............................. */}
       <PerksList>
        <Section>
          <StyleSvg>
            <Data />
          </StyleSvg>
          <Heading as="h5">Community Governance</Heading>
        </Section>
        <Text type="Para1">
        Participate in decentralized decision-making through voting.
        </Text>
      </PerksList>
    </PerksLayout>
  );
};

export default Perks;
