import React, { Component } from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { MainForm, Button, Label, Input } from './GlobalStyle';

export class ContactForm extends Component {
  handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = { id: nanoid(), name, number };
    this.props.onSubmit(contact);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        <MainForm autoComplete="off">
          <div>
            <Label htmlFor="name">Name</Label>
            <div>
              <Input
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
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object),
};
