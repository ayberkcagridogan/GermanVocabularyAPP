import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DeckManagement  from './pages/cardmanagement/DeckManagement';
import Cards from './pages/cardmanagement/Cards';
import DeckList from './pages/cardgame/DeckList';
import CardGame from './pages/cardgame/CardGame';
import { Container} from './styles/AppStyles'



const App = () => (
  <Router>
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck-management" element={<DeckManagement />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/card-game" element={<DeckList />} />
        <Route path="/cardgame/:deckId" element={<CardGame />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
