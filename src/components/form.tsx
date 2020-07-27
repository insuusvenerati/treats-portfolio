import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  Name: string;
  Email: string;
  Message: string;
};

const Form: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);
  console.log(errors);

  return (
    <>
      <h1 className="sheet__title">Contact</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" name="Name" ref={register({ required: true })} />
          <input type="email" placeholder="Email" name="Email" ref={register({ required: true })} />
          <input type="textarea" placeholder="Message" name="Message" ref={register({ required: true })} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
