import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I discovered my love for coding in 7th grade. Since then I've been working hard to learn new skills. For me coding is like art, I love it as much as I to paint. I want to do things that stand out, I'm passionate about creating new technologies that can help people and inspire them too.
I'm interested in full-stack development and AI. As of now, I can work well with full-stack web development, cross-browser compatibility, technical debt, database management, AWS and troubleshooting. I can convert designs into webpages, create their backends and host them online.
I may know only a drop of code in the gigantic technology ocean, but I'm trying my best to learn more each day and yes one day I may succeed in creating something outstanding.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
