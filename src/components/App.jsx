import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactFind } from './ContactFind';
import { Section, Title } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in your contact list.`, 'OK')
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filterContacts = this.filterContacts();
    const deleteContact = this.deleteContact;

    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <Title>Contacts</Title>
        <ContactFind onFilter={changeFilter} filter={filter} />
        <ContactList
          filterContacts={filterContacts}
          deleteContact={deleteContact}
        />
      </Section>
    );
  }
}
