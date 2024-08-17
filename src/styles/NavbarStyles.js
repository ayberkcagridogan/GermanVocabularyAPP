import { makeStyles } from '@mui/styles';

const useNavbarStyles = makeStyles({
  appBar: {
    backgroundColor: '#3f51b5',
    marginBottom: '20px',
  },
  tab: {
    minWidth: 120,
    '&.Mui-selected': {
      color: '#ffeb3b',
    },
  },
  tabLabel: {
    fontSize: '16px',
    textTransform: 'none',
  },
});

export default useNavbarStyles;
