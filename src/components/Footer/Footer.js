import React from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterHref
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Sign up to stay up to date!
        </FooterSubHeading>
        <FooterSubText>Get notified when released on apple's app store or web version is published</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to='/investors'>Investors</FooterLink>
            <FooterHref href='https://www.termsfeed.com/live/6ffb560b-47f8-447f-95f5-620e702829c5' target="_blank">Privacy Policy</FooterHref>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>{`Joshua Godwin © ${date.getFullYear()} | Google Play and the Google Play logo are trademarks of Google LLC. | Apple and Apple Logo are trademarks of Apple Inc.

`}</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.youtube.com/@JoshGodwinArt/videos' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/JoshGodwinArt' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/joshuagodwin/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;