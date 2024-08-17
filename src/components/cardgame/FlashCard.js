import React, { useState } from 'react';
import {CardContainer , CardInner , CardFront , CardBack} from '../../styles/FlashCardStyles';
import {CardContent, Typography, Button, TextField , Box} from '@mui/material';

const FlashCard = ({ cardData, handleRemember, handleForget, handleNextCard }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <CardContainer>
        <CardInner isFlipped={isFlipped}>
          <CardFront>
            <CardContent>
              <Typography variant="h5">{cardData.germanWord}</Typography>
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() => { handleRemember(true); handleFlip(); }}>
                  Hatırladım.
                </Button>
                <Button variant="contained" color="secondary" onClick={() => { handleForget(false); handleFlip(); }} style={{ marginLeft: 10 }}>
                  Hatırlamadım!
                </Button>
              </Box>
            </CardContent>
          </CardFront>
          <CardBack>
            <CardContent>
              <Typography variant="h5">Cevap</Typography>
              <Typography variant="body1">{cardData.turkishMeaning}</Typography>
              <Box mt={2}>
                <TextField
                  label="Notlar"
                  fullWidth
                  multiline
                  rows={4}
                  value={cardData.notes}
                  variant="outlined"
                  disabled
                />
                <Button variant="contained" color="primary" onClick={() => {handleNextCard(); handleFlip(); }} style={{ marginTop: 10 }}>
                  Sonraki Kart
                </Button>
              </Box>
            </CardContent>
          </CardBack>
        </CardInner>
      </CardContainer>
    );
  };
  
  export default FlashCard;

