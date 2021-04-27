import React, { memo } from 'react';
import { Image } from 'react-bootstrap';

export const ProfileImage = memo(
  function ProfileImage() {
    return (
      <Image
        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairBob&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        roundedCircle
        fluid
      />
    );
  }
);
