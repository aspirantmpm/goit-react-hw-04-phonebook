// import React, { Component } from 'react';
import React, { useState } from 'react';
import { Formik } from 'formik';
// import { nanoid } from 'nanoid';
// import propTypes from 'prop-types';
import { MainForm, Button, Label, Input } from './GlobalStyle';

export const ContactForm = ({onSubmit}) => {
  // const handleSubmit = ({ name, number }, { resetForm }) => {
  //   const contact = { id: nanoid(), name, number };
  //   this.props.onSubmit(contact);
  //   resetForm();
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

    const handleSubmit = e => {
      e.preventDefault();
      onSubmit({ name, number });
      reset();
    };

    const reset = () => {
      setName('');
      setNumber('');
    };

  // render() {
    return (
      <Formik initialValues={{ name: '', number: '' }} >
        <MainForm autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <div>
              <Input
                onChange={onChangeName}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="number">Number</Label>
            <div>
              <Input
                onChange={onChangeNumber}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
          </div>
          <Button type="submit">Add contact</Button>
        </MainForm>
      </Formik>
    );
  }
// }

// ContactForm.propTypes = {
//   onSubmit: propTypes.func.isRequired,
//   contacts: propTypes.arrayOf(propTypes.object),
// };
