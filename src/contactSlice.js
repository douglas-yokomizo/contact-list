import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
