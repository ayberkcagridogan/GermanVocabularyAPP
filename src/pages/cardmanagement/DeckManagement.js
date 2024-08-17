import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createDeck , fetchDecks} from '../../utils/germanvocabularyapi';
import { DeckContainer } from '../../styles/DeckStyles';
import { setDeck } from '../../features/deck/deckSlice';



const DeckManagement = () => {
  const [decks, setDecks] = useState([]);
  const [open, setOpen] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getDecks = async () => {
      try {
        const decks = await fetchDecks();
        setDecks(decks);
      } catch (error) {
        console.error('Error fetching decks', error);
      }
    };
    getDecks();
  }, []);

  const handleNewDeck = async () => {
    try {
      const newDeck = await createDeck(newDeckName);
      setDecks([...decks, newDeck]);
      dispatch(setDeck(newDeck));
      navigate(`/cards`);
    } catch (error) {
      console.error('Error creating new deck', error);
    }
  };

  const handleEditDeck = (deck) => {
    dispatch(setDeck(deck));
    navigate(`/cards`);
  };

  return (
    <DeckContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Deste Yönetimi</Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>+</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Deste İsmi</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {decks.map((deck) => (
              <TableRow key={deck.id}>
                <TableCell>{deck.name}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => handleEditDeck(deck)}>Düzenle</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Deste Oluşturma</DialogTitle>
        <DialogContent>
          <TextField
            label="Deste Adı"
            fullWidth
            value={newDeckName}
            onChange={(e) => setNewDeckName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">İptal</Button>
          <Button onClick={handleNewDeck} color="primary">Oluştur</Button>
        </DialogActions>
      </Dialog>
    </DeckContainer>
  );
};

export default DeckManagement;
