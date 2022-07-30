import { useState } from 'react';

function Contact() {
  const [showForm, setShowForm] = useState(true);
  const [user, setUser] = useState({ name: '', email: '' });

  const onSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  }

  const handleChange = (event) => {
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
        <button type="submit">Send</button>
      </form>
    );
  };

  return showForm ? renderForm() : renderConfirmation();
}

export { Contact };
