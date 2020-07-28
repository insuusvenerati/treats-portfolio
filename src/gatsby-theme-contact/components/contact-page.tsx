import React from 'react';
import Intro from './intro';
import Form from './form';

const ContactPage: React.FC = () => {
  return (
    <section
      sx={{
        mb: 3,
        display: 'grid',
        gridTemplateColumns: [`auto`, null, `2fr 1fr`],
        gridTemplateRows: [`auto`],
        gridTemplateAreas: [
          `
        "intro"
        "form"
        "details"
        `,
          null,
          `
        "intro intro"
        "form details"
        `,
        ],
      }}
    >
      <div sx={{ gridArea: `intro`, mb: [1, null, 3] }}>
        <Intro />
      </div>
      <div sx={{ gridArea: `form`, pr: [0, null, 5] }}>
        <Form />
      </div>
    </section>
  );
};

export default ContactPage;
