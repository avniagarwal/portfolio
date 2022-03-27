import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main cneter>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer. Creating Wordpress and MERN Stack websites.
      </SectionText>
      <Button onClick={ () => window.location = "https://github.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;