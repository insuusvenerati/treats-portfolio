import React, { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import FormInputs from './form-inputs';
import FormControls from './form-controls';
import ErrorMessage from './error-message';
import SuccessMessage from './success-message';

const Form: React.FC = () => {
  const [formServerState, setFormServerState] = useState({
    submitting: false,
    status: { ok: null, msg: '' },
  });

  const handleServerResponse = (ok: boolean, msg: string, form: HTMLFormElement) => {
    setFormServerState({ submitting: false, status: { ok, msg } });
    if (ok) {
      form.reset();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.target;
    axios({
      method: 'post',
      url: 'https://getform.io/f/151bff71-21c9-4429-8bbd-f63f8ba81321',
      data: new FormData(form as HTMLFormElement),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        handleServerResponse(true, 'Thanks', form as HTMLFormElement);
      })
      .catch((error: AxiosError<string>) => {
        handleServerResponse(false, error.message, form as HTMLFormElement);
      });
  };

  const FormErrorMessage: React.FC = () => {
    if (formServerState.status.ok === null) {
      return null;
    } else if (formServerState.status.ok) {
      return <SuccessMessage />;
    } else {
      return <ErrorMessage />;
    }
  };

  return (
    <form data-cy="contact-form" onSubmit={handleSubmit} name="Contact">
      <section>
        <FormErrorMessage />
        <FormInputs />
        <FormControls />
      </section>
    </form>
  );
};

export default Form;
