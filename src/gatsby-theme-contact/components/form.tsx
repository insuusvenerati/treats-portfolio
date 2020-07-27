import React, { FormEvent, useState } from 'react';

import FormInputs from './form-inputs';
import FormControls from './form-controls';

const Form: React.FC = () => {
  const [formFields, setFormFields] = useState({});

  const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    res = await res.json()

    if (res.success) {
      return {
        result: true,
      }
    }
    return {
      result: false,
      ...res,
    }
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetch(`https://formspree.io/xoqkypla`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <form onSubmit={handleFormSubmit} name="Contact">
      <section>
        <>
          <FormInputs formFields={formFields} />
          <FormControls />
        </>
      </section>
    </form>
  );
};

export default Form;
