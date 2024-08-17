import React, { useState }  from 'react';
import { InputField } from '../../styles/FormStyles';
import { Typography } from '@mui/material';

const OtherForms =  ({ handleChange ,othernoun ,deckName}) => {
  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!othernoun.germanWord) errors.germanWord = 'Alman Kelime boş olamaz!';
    if (!othernoun.turkishMeaning) errors.turkishMeaning = 'Türkçe Karşılığı boş olamaz!';
    setLocalErrors(errors);
  };

  return (
    <>
    <div>
      <Typography variant="h4">
        Diğer - {deckName} 
      </Typography>
        <InputField
          label="Alman Kelime"
          name="germanWord"
          value={othernoun?.germanWord || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.germanWord}
          error={!!localErrors.germanWord}
          onBlur={validate}
        />
        <InputField
          label="Türkçe Anlamı"
          name="turkishMeaning"
          value={othernoun?.turkishMeaning || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.turkishMeaning}
          error={!!localErrors.turkishMeaning}
          onBlur={validate}
        />
        <InputField
          label="Notlar"
          name="note"
          value={othernoun?.note || ""}
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default OtherForms;