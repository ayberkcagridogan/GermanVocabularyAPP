import React , { useState}  from 'react';
import { Container } from '@mui/material';
import { FormContainer, SubmitButton } from '../../styles/FormStyles';
import { createCard , updateCard } from '../../utils/germanvocabularyapi'
import NounForm from './NounForm';
import VerbForm from './VerbForm';
import AdjectiveForm from './AdjectivesForm';
import OtherForms from './OtherForm';

const WordForm = ({selectedCard, deck}) => {
  const [card, setCard] = useState(selectedCard || {});


  const handleChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
      if(card.id){
        updateCard(e,card);
      }
      if(!card.id){
        createCard(e, card);
      }
  };


  return (
    <Container maxWidth="sm">
      { deck ? (
            <FormContainer>
              <form onSubmit={onSubmit}>
                {card.wordType === 'Noun' && deck && <NounForm handleChange= {handleChange} noun = {card} deckName={deck.name} />}
                {card.wordType === 'Verb' && <VerbForm handleChange= {handleChange} verb = {card} deckName={deck.name} />}
                {card.wordType === 'Adjective' && <AdjectiveForm handleChange={handleChange} adjective = {card} deckName={deck.name || ''} />}
                {card.wordType === 'OtherNoun' && <OtherForms handleChange={handleChange} othernoun = {card} deckName={deck.name} />}
                <SubmitButton type="submit" fullWidth variant="contained">
                  Kaydet
                </SubmitButton>
              </form>
            </FormContainer>
           ) : (
            <div>Loading...</div>
           )}
    </Container>  
  );
};

export default WordForm;