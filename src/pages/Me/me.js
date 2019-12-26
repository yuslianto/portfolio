import React from 'react';

import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <div>

      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>user.basic.summary</Paragraph>
      </div>

      <div>
        <div>
          <SectionTitle>Skils</SectionTitle>
          <div>
            {/*
              mapping skills item
            */}
            <Pill>name skill</Pill>
            <Pill>name skill</Pill>
          </div>
        </div>
      </div>

      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          <ProfileLink>
            <a href="/">
              something
            </a>
          </ProfileLink>
        </ul>
      </div>

    </div>
  );
};

export default Me;