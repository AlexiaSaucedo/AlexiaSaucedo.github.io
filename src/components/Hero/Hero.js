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
        Hello! My name is Alexia Saucedo, right now I am a Computer Science student. I want to focus my career in designing and the developing of web and ios applications.
      </SectionText>
      <Button onClick={() => window.location = "mailto:alexia_fda@hotmail.com"}>  Contact</Button>
    </LeftSection>

  </Section >
);

export default Hero;