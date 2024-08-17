import { Card, Box } from '@mui/material';
import { styled } from '@mui/system';

export const CardContainer = styled(Card)({
  maxWidth: 400,
  margin: '0 auto',
  marginTop: 20,
  padding: 20,
  position: 'relative',
  perspective: '1000px',
});

export const CardInner = styled(Box)(({ isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '300px', // Kart yüksekliğini ayarlayın
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

export const CardFront = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%', // Kartın tam yüksekliğini kullanın
  top: 0,
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', // İçeriği ortalamak için
});

export const CardBack = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%', // Kartın tam yüksekliğini kullanın
  top: 0,
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', // İçeriği ortalamak için
});