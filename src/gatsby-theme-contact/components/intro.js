import React from 'react';
import { Styled } from 'theme-ui';

const Intro = () => (
  <>
    <Styled.h2>Contact</Styled.h2>
    <Styled.p style={{ color: '#777' }}>
      If you want to get in touch to inquire about contract work or have any questions, feel free to fill in
      the form below or send an email to{' '}
      <a style={{ textDecoration: 'none' }} href="mailto:norwood.lja@gmail.com">
        <span style={{ color: '#292B25', fontWeight: 'bold' }}>norwood.lja@gmail.com</span>
      </a>
      !
    </Styled.p>
  </>
);

export default Intro;
