import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer, StyledButton, ButtonText} from '../styles/HomeStyles';
import deckManagementIcon from '../icons/deck-management.png';
import cardGameIcon from '../icons/card-games.png';
import {CenteredTitle} from '../styles/GlobalStyles';

const Home = () => {
  return (
    <div>
      <CenteredTitle>Hoşgeldiniz</CenteredTitle>
      <ButtonContainer>
        <Link to="/deck-management">
          <StyledButton>
            <img src={deckManagementIcon} alt="Deste Yönetimi" />
            <ButtonText>Deste Yönetimi</ButtonText>
          </StyledButton>
        </Link>
        <Link to="/card-game">
          <StyledButton>
            <img src={cardGameIcon} alt="Kart Oyunu" />
            <ButtonText>Kart Oyunu</ButtonText>
          </StyledButton>
        </Link>
      </ButtonContainer>
    </div>
  );
};

export default Home;