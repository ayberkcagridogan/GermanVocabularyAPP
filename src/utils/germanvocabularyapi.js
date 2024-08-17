import axios from 'axios';

const API_BASE_URL = 'http://localhost:5008/api';
const DECK = 'deck';

export const createDeck = async (name) => {
  const response = await axios.post(`${API_BASE_URL}/${DECK}`, { name });
  return response.data;
};

export const fetchDecks = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/${DECK}`);
    return response.data;
  } catch(error)
  {
    console.error("Error saving data", error);
  }
};

export const fetchDeck = async (deckId) => {
  const response = await axios.get(`${API_BASE_URL}/${DECK}/${deckId}`);
  return response.data;
};


export const updateCardField = async (cardId,cardType,field,value) => {
  const requestData = [
    {
      path: field,
      from: "replace",
      value: value
    }
  ];
  try {
  const response = await axios.patch(`${API_BASE_URL}/${cardType}/${cardId}`, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createCard = async (e, card) => {
  console.log("Create new card" , {card});
  e.preventDefault();
  try {
    const response = await axios.post(`${API_BASE_URL}/${card.wordType}`, card);
    console.log(response.data);
  } catch (error) {
    console.error("Error saving data", error);
  }
};

export const updateCard = async(e,card) => {
  console.log("Update new card", {card});
  e.preventDefault();
  try {
    const response = await axios.put(`${API_BASE_URL}/${card.wordType}/${card.id}`, card);
    console.log("response" , response);
  } catch (error) {
    console.error("Error saving data", error);
  }

};