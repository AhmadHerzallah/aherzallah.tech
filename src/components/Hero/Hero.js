import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          aherzallah.tech
        </SectionTitle>
        <SectionText>
          A young Palestinians who lives in Gaza, have passion in Technology,
          Climate Changes, Mathematics and Physics
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
