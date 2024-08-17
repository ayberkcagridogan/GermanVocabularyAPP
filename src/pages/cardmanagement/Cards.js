import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions , Menu, MenuItem, IconButton} from '@mui/material';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import { lazy, Suspense } from 'react';
import { openWordForm, closeWordForm } from '../../features/wordForm/wordFormSlice';

const WordForm = lazy(() => import('../../components/cardmanagement/WordForm'));


const CardsContainer = styled(Box)({
  padding: '20px',
});

const Cards = () => {
  const deck = useSelector((state) => state.deck.selectedDeck);
  const wordForm = useSelector((state) => state.wordForm);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [newCard, setNewCard] = useState(null);

  useEffect(() => {
    if (deck) {
      setCards(deck.cards);
    }
  }, [deck]);

  useEffect(() => {
    if (selectedCard && deck) {
      dispatch(openWordForm({selectedCard: selectedCard, deck: deck }));
    }
    if(newCard && deck){
      dispatch(openWordForm({selectedCard: newCard, deck: deck }));
    }
  }, [selectedCard, dispatch, deck, newCard]);


  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (wordType) => {
    handleMenuClose();
    setNewCard({ wordType });
  };

  const handleDialogClose = () => {
    dispatch(closeWordForm());
    setNewCard(null);
    setSelectedCard(null);
  }

  return (
    <CardsContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{deck.name} Kartları</Typography>
        <IconButton color="primary" onClick={handleMenuOpen}>
          <AddIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead stickyHeader>
            <TableRow>
              <TableCell><Typography variant="h5"> Kartın İsmi</Typography></TableCell>
              <TableCell><Typography variant="h5"> Kartın Türü</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((card) => (
              <TableRow key={card.id} onClick={() => handleCardClick(card)}>
                <TableCell>{card.germanWord}</TableCell>
                <TableCell>{card.wordType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick('Noun')}>İsim</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Verb')}>Fiil</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Adjective')}>Sıfat</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('OtherNoun')}>Diğer İsim</MenuItem>
      </Menu>
      
      {wordForm.open && (
        <Dialog open={wordForm.open} onClose={() => handleDialogClose()}>
          <DialogTitle>{wordForm.selectedCard.wordType}</DialogTitle>
          <DialogContent>
            <Suspense fallback={<div>Loading...</div>}>
              <WordForm
                selectedCard={wordForm.selectedCard}
                deck={wordForm.deck}
              />
            </Suspense>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleDialogClose()} color="primary">İptal</Button>
          </DialogActions>
        </Dialog>
      )}
    </CardsContainer>
  );
};

export default Cards;
