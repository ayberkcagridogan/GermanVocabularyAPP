import { configureStore } from '@reduxjs/toolkit';
import deckReducer from '../features/deck/deckSlice'; 
import wordFormReducer from '../features/wordForm/wordFormSlice';


const store = configureStore({
  reducer: {
    deck: deckReducer,
    wordForm: wordFormReducer,
  },
});

export default store;