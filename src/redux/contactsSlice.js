import { createSlice } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initialContacts';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  contacts: initialContacts,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: (state, action) => {
      console.log(action.payload);
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setContactFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact, setContactFilter } =
  contactsSlice.actions;
