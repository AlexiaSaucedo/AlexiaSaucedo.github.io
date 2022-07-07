import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello! My name is Alexia Saucedo; I am a Computer Science student passionate about designing and developing web and iOS applications.
      </SectionText>
      <Button onClick={() => window.location = "mailto:alexia_fda@hotmail.com"}>  Contact</Button>
    </LeftSection>

  </Section >
);

export default Hero;