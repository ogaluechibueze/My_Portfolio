import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm here to offer you my skills as an Engineer and as a developer, while working in an engineering company i developed a stack App with different programming languages in order to make the work easy. <br/> you can hire me as an Engineer or a developer and i promise i will deliver to my full potential
        </SectionText>
        <Button onClick={(e) => {
      e.preventDefault();
      window.location.href="#about";
      }}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;