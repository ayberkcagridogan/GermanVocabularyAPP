import React, { useState }  from 'react';
import { InputField } from '../../styles/FormStyles';
import { Typography } from '@mui/material';

const NounForm = ({ handleChange , noun , deckName}) => {
  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!noun.germanWord) errors.germanWord = 'Alman Kelime boş olamaz!';
    if (!noun.turkishMeaning) errors.turkishMeaning = 'Türkçe Karşılığı boş olamaz!';
    if (!noun.plural) errors.plural = 'Çoğul boş olamaz!';
    setLocalErrors(errors);
  };

  return (
    <>
    <div>
        <Typography variant="h4">
            Isim - {deckName} 
        </Typography>
        <InputField
        label="Alman Kelime"
        name="germanWord"
        value={noun?.germanWord || ""}
        fullWidth
        onChange={handleChange}
        required
        helperText={localErrors.germanWord}
        error={!!localErrors.germanWord}
        onBlur={validate}
      />
      <InputField
        label="Çoğul"
        name="plural"
        value={noun?.plural || ""}
        fullWidth
        onChange={handleChange}
        required
        helperText={localErrors.plural}
        error={!!localErrors.plural}
        onBlur={validate}
      />
      <InputField
        label="Türkçe Karşılığı"
        name="turkishMeaning"
        value={noun?.turkishMeaning || ""}
        fullWidth
        onChange={handleChange}
        required
        helperText={localErrors.turkishMeaning}
        error={!!localErrors.turkishMeaning}
        onBlur={validate}
      />
      <InputField
        label="Not"
        name="note"
        value={noun?.note || ""}
        fullWidth
        multiline
        rows={3}
        onChange={handleChange}
      />
    </div>
    </>
  );
};

export default NounForm;
