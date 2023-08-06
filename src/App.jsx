import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact, deleteContact } from './contactSlice';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);

  const contacts = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();

  const handleAddContact = () => {
    dispatch(addContact({ id: Date.now(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleEditContact = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setEditId(id);
    }
  };

  const handleSaveContact = () => {
    dispatch(editContact({ id: editId, name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
    setEditId(null);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact({ id }));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {editId ? (
        <button onClick={handleSaveContact}>Save</button>
      ) : (
        <button onClick={handleAddContact}>Add</button>
      )}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span> - <span>{contact.email}</span> -{' '}
            <span>{contact.phone}</span>
            <button onClick={() => handleEditContact(contact.id)}>Edit</button>
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
