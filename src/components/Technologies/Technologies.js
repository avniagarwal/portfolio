import React from 'react';
import { DiMongodb, DiReact, DiWordpress, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design.
    </SectionText>
    <br />
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js and NEXT.js 
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiMongodb size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Node and Databases
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiWordpress size='3rem' />
        <ListContainer>
          <ListTitle>Github</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Elemetor, Plugins
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiGithubBadge size='3rem' />
        <ListContainer>
          <ListTitle>Wordpress</ListTitle>
        </ListContainer>
        <ListParagraph>
          Experience with <br />
          Github and DeVops
        </ListParagraph>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
