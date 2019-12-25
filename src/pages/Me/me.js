import React from 'react';

import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <div>
        this is me
        <ul>
          <ProfileLink>
            <a href="/">
              something
            </a>
          </ProfileLink>
        </ul>
    </div>
  );
};

export default Me;