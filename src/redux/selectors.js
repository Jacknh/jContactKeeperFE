export const getCurrentContact = state => {
  const { contacts, current } = state.contacts;

  if (current === null) {
    return {
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    }
  }

  return contacts.find(contact => contact.id === current)
}

export const getFilteredContacts = state => {
  const { contacts, filter } = state.contacts;

  if (filter === null) {
    return contacts;
  }

  return contacts.filter(contact => contact.name.includes(filter) || contact.email.includes(filter))
}