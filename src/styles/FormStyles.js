import { styled } from '@mui/system';
import { Box, TextField, Button } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}));

export const InputField = styled(TextField)(({ theme , error}) => ({
  marginBottom: theme.spacing(2),
'& .MuiFormLabel-root': {
    color: ({ error }) => (error ? 'red' : 'inherit'),
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: ({ error }) => (error ? 'red' : 'inherit'),
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ({ error }) => (error ? 'red' : 'inherit'),
    },
    '&:hover fieldset': {
      borderColor: ({ error }) => (error ? 'red' : 'inherit'),
    },
    '&.Mui-focused fieldset': {
      borderColor: ({ error }) => (error ? 'red' : 'inherit'),
    },
  },
}));

InputField.defaultProps = {
  variant: 'standard',
};

export const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));
