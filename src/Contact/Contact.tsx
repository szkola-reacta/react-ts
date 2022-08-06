import { useState } from 'react';

type User = {
  name: string;
  email: string;
}

function Contact() {
  const [showForm, setShowForm] = useState(true);
  const [user, setUser] = useState<User>({ name: '', email: '' });

  //const onSubmit = (event: React.FormEvent) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setShowForm(false);
  }

  // const handleChange = (event: React.ChangeEvent) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const renderConfirmation = () => {
    return (
      <div className="message">E-mail sent: {user.name}, {user.email}</div>
    );
  }

  const handleResetClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('Hello!');
  }

  const renderForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Your name</label>
          <input id="name" type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" name="email" onChange={handleChange} />
        </div>
        <button onClick={handleResetClick}>Reset</button>
        <button type="submit">Send</button>
      </form>
    );
  };

  return showForm ? renderForm() : renderConfirmation();
}

export { Contact };
