import React, { useState } from 'react';
import { InputField }from '../../styles/FormStyles';
import { Typography } from '@mui/material';

const AdjectiveForm = ({ handleChange , adjective, deckName}) => {
  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!adjective.germanWord) errors.germanWord = 'Alman Kelime boş olamaz!';
    if (!adjective.turkishMeaning) errors.turkishMeaning = 'Türkçe Karşılığı boş olamaz!';
    if (!adjective.komparativ) errors.komparativ = 'Komparativ boş olamaz!';
    if (!adjective.superlativ) errors.superlativ = 'Superlativ boş olamaz!';
    setLocalErrors(errors);
  };

  return (
    <>
    <div>
        <Typography variant="h4">
          Sifat - {deckName} 
        </Typography>
        <InputField
          label="Alman Kelime"
          name="germanWord"
          value={adjective?.germanWord || ""}
          fullWidth
          onChange={handleChange}
          required
          error={!!localErrors.germanWord}
          helperText={localErrors.germanWord}
          onBlur={validate}
        />
        <InputField
          label="Türkçe Karşılığı"
          name="turkishMeaning"
          value={adjective?.turkishMeaning || ""}
          fullWidth
          onChange={handleChange}
          required
          error={!!localErrors.turkishMeaning}
          helperText={localErrors.turkishMeaning}
          onBlur={validate}
        />
        <InputField
          label="Komparativ"
          name="komparativ"
          value={adjective?.komparativ || ""}
          fullWidth
          onChange={handleChange}
          required
          error={!!localErrors.komparativ}
          helperText={localErrors.komparativ}
          onBlur={validate}
        />
        <InputField
          label="Superlativ"
          name="superlativ"
          value={adjective?.superlativ || ""}
          fullWidth
          onChange={handleChange}
          required
          error={!!localErrors.superlativ}
          helperText={localErrors.superlativ}
          onBlur={validate}
        />
        <InputField
          label="Not"
          name="note"
          value={adjective?.note || ""}
          fullWidth
          multiline
          rows={3}
          onChange={handleChange}
          onBlur={validate}
        />
      </div>
      </>
  );
};

export default AdjectiveForm