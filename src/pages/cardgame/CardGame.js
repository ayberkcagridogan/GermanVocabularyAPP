import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FlashCard from '../../components/cardgame/FlashCard';
import { fetchDeck, updateCardField } from '../../utils/germanvocabularyapi';
import { Button, Typography } from '@mui/material';

const CardGame = () => {
    const { deckId } = useParams();
    const [cards, setCards] = useState([]);
    const [cardData, setCardData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished , setIsFinished] = useState(false);
    const navigate  = useNavigate();
  
    useEffect(() => {
      // İlk kart setini yükleyin
      const getCards = async () => {
        try {
          const deck = await fetchDeck(deckId);
          setCards(deck.cards);
          setCardData(deck.cards[0]);
        } catch (error) {
          console.error('Error fetching cards', error);
        }
      };
      getCards();
    }, []);
  
    const handleRemember = async (isRemembered) => {
      const path = "/isRemember";
      const value = isRemembered;
      try {
        const responseData = await updateCardField(cardData.id, cardData.wordType ,path, value);
        console.log('Success:', responseData);
        setCardData(prevData => ({
          ...prevData,
          isRemember: value
        }));
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleNextCard = () => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < cards.length) {
        setCurrentIndex(nextIndex);
        setCardData(cards[nextIndex]);
      } else {
        setIsFinished(true);
        console.log('All cards completed');
      }
    };

    const handleRedirect = () => {
      navigate('/card-game');
    };
  
    return (
      <div>
        {isFinished ? (
          <div>
            <Typography variant="h4">Kartlar Bitti!</Typography>
            <Button variant="contained" color="primary" onClick={handleRedirect}>
              Card-Game Sayfasına Git
            </Button>
          </div>
        ) : (
          cardData ? (
            <FlashCard
              cardData={cardData}
              handleRemember={handleRemember}
              handleForget={handleRemember}
              handleNextCard={handleNextCard}
            />
          ) : (
            <div>Loading...</div>
          )
        )}
      </div>
    );
  };


  export default CardGame;