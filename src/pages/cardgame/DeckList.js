import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeckContainer } from '../../styles/DeckStyles'
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchDecks } from '../../utils/germanvocabularyapi';


const DeckList = () => {
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();

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

  const handleDeckClick = (deckId) => {
    navigate(`/cardgame/${deckId}`);
  };

  return (
    <DeckContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">Deste Yönetimi</Typography>
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
                    <Button variant="contained" color="secondary" onClick={() => handleDeckClick(deck.id)}>Play</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </DeckContainer>
  );
};

export default DeckList;
