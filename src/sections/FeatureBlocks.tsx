import { ReactNode } from "react";

import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";
import { Card } from "../components/Card";
import { Details } from "../components/Details";
import { GradientText } from "../components/GradientText";
import { Section } from "../components/Section";
import { Title } from "../components/Title";

// Built with Vivid (https://vivid.lol) ⚡️

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <Card grayer className="items-center gap-1 p-6 col">
      {children}
    </Card>
  );
};

export const FeatureBlocks = () => {
  return (
    <Section className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <Title size="md">

          <GradientText className="purple-teal">Our Services</GradientText>
        </Title>
        <Details>
        Our exceptional services are a reflection of our talented team and extensive experience
        </Details>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>
          <ShuffleIcon />
          <BlockTitle>Web Development</BlockTitle>
          <BlockText>
          Building responsive, high-performance websites tailored to your needs
          </BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <SignalIcon />
          <BlockTitle>Mobile App Development</BlockTitle>
          <BlockText>
            codeCrafting intuitive mobile apps for iOS and Android platforms.
          </BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <TalkingIcon />
          <BlockTitle>UI/UX Design</BlockTitle>
          <BlockText>
          Designing engaging user experiences with a focus on usability and aesthetics.
          </BlockText>
        </Block>
        {/* Block 4 */}
        <Block>
          <DoorIcon />
          <BlockTitle>Digital Marketing</BlockTitle>
          <BlockText>
          Boosting your online presence with effective SEO and marketing strategies.
          </BlockText>
        </Block>
        {/* Block 5 */}
        <Block>
          <CardsIcon />
          <BlockTitle>Cloud Deployment</BlockTitle>
          <BlockText>
          Ensuring seamless deployment and scalability with cloud-based solutions
          </BlockText>
        </Block>
        {/* Block 6 */}
        <Block>
          <MagicIcon />
          <BlockTitle>E-commerce Solutions</BlockTitle>
          <BlockText>
          Developing secure and scalable e-commerce platforms for your business.
          </BlockText>
        </Block>
      </div>
    </Section>
  );
};
