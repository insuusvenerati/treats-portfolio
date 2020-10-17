import React, { ForwardRefExoticComponent } from 'react';
import { Input, Label, Textarea } from 'theme-ui';

type LabeledInputProps = {
  label: string;
  as?: ForwardRefExoticComponent<unknown>;
  // name: string;
  required?: boolean;
  minLength?: number;
  rows?: number;
  placeholder?: string;
  type?: string;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ as = Input, label, ...props }) => {
  const name: string = label.toLowerCase();
  const Component = as;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Component name={name} id={name} {...props} />
    </>
  );
};

const FormInput: React.FC = () => {
  return (
    <>
      <LabeledInput
        data-cy="input-name"
        name="name"
        label="Name"
        type="text"
        required
        placeholder="Enter your name"
      />
      <LabeledInput
        data-cy="input-email"
        name="email"
        label="Email"
        type="email"
        required
        placeholder="Enter your email"
      />
      <LabeledInput
        data-cy="input-message"
        name="message"
        label="Message"
        as={Textarea}
        required
        minLength={10}
        rows={5}
        placeholder="Leave a message here"
      />
    </>
  );
};

export default FormInput;
