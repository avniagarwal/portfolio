import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+917830896366'>+91-7830896366</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:avni111agarwal@gmail.com'>avni111agarwal@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIcons>
        <CompanyContainer>
          <Slogan>Innovating new ideas.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/avniagarwal">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/avni-agarwal-4aa254193/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/_avniagarwal__">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
        </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
