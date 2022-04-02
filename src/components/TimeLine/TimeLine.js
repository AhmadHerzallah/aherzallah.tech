import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionHeader,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionHeader>Name: Ahmad Herzallah</SectionHeader>
      <SectionHeader>Age: 17</SectionHeader>
      <SectionText>
        A young Palestinians who lives in Gaza, have passion in Technology,
        Climate Change, Mathematics and Physics.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
