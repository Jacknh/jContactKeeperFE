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