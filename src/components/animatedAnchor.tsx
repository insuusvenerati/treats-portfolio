import React, { useState } from 'react';

const AnimatedAnchor: React.FC<{ profile: string }> = ({ profile, children }) => {
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
      onMouseLeave={(): void => setHovered(false)}
      onMouseEnter={(): void => setHovered(true)}
    >
      {children}
    </a>
  );
};

export default AnimatedAnchor;
