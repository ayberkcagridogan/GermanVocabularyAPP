import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  selectedCard: null,
  deck: null,
};

const wordFormSlice = createSlice({
  name: 'wordForm',
  initialState,
  reducers: {
    openWordForm(state, action) {
      state.open = true;
      state.selectedCard = action.payload.selectedCard;
      state.deck = action.payload.deck;
    },
    closeWordForm(state) {
      state.open = false;
      state.selectedCard = null;
      state.deck = null;
    },
  },
});

export const { openWordForm, closeWordForm } = wordFormSlice.actions;
export default wordFormSlice.reducer;
