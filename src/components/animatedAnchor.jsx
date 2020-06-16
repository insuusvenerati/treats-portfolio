import React, { useState } from 'react';

const AnimatedAnchor = ({ profile, children }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <a
      key={profile.profileType}
      href={profile.url}
      target="blank"
      className={
        isHovered
          ? `animated pulse infinite social social--${profile.profileType.toLowerCase()}`
          : `social social--${profile.profileType.toLowerCase()}`
      }
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
    >
      {children}
    </a>
  );
};

export default AnimatedAnchor;
