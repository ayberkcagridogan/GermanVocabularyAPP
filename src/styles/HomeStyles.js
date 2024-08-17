import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
  color: #333;
`;