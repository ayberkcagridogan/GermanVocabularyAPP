import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDeck: null,
};

const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    setDeck: (state, action) => {
      state.selectedDeck = action.payload;
    },
    clearDeck: (state) => {
      state.selectedDeck = null;
    },
  },
});

export const { setDeck, clearDeck } = deckSlice.actions;

export default deckSlice.reducer;