import React, { useState }  from 'react';
import { InputField } from '../../styles/FormStyles';
import { Typography } from '@mui/material';

const VerbForm = ({ handleChange ,verb, deckName}) => {
  const [localErrors, setLocalErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!verb.germanWord) errors.germanWord = 'Alman Kelime boş olamaz!';
    if (!verb.turkishMeaning) errors.turkishMeaning = 'Türkçe Karşılığı boş olamaz!';
    if (!verb.perfekt) errors.perfekt = 'Perfekt boş olamaz!';
    if (!verb.ich) errors.ich = 'Ich Karşılığı boş olamaz!';
    if (!verb.du) errors.du = 'Du Karşılığı boş olamaz!';
    if (!verb.esSieEr) errors.esSieEr = 'Es-Sie-Er Karşılığı boş olamaz!';
    if (!verb.wir) errors.wir = 'Wir Karşılığı boş olamaz!';
    if (!verb.turkishMeaning) errors.turkishMeaning = 'Türkçe Karşılığı boş olamaz!';
    if (!verb.ihr) errors.ihr = 'Ihr Karşılığı boş olamaz!';
    if (!verb.sieSie) errors.sieSie = 'sie-Sie Karşılığı boş olamaz!';
    setLocalErrors(errors);
  };

  return (
    <>
    <div>
        <Typography variant="h4">
          Fiil - {deckName} 
        </Typography>
        <InputField
          label="Almanca Kelime"
          name="germanWord"
          value={verb?.germanWord || ""}
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
          value={verb?.turkishMeaning || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.turkishMeaning}
          error={!!localErrors.turkishMeaning}
          onBlur={validate}
        />
        <InputField
          label="Perfekt"
          name="perfekt"
          value={verb?.perfekt || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.perfekt}
          error={!!localErrors.perfekt}
          onBlur={validate}
        />
        <InputField
          label="ich"
          name="ich"
          value={verb?.ich || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.ich}
          error={!!localErrors.ich}
          onBlur={validate}
        />
        <InputField
          label="du"
          name="du"
          value={verb?.du || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.du}
          error={!!localErrors.du}
          onBlur={validate}
        />
        <InputField
          label="es/sie/er"
          name="esSieEr"
          value={verb?.esSieEr || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.esSieEr}
          error={!!localErrors.esSieEr}
          onBlur={validate}
        />
        <InputField
          label="wir"
          name="wir"
          value={verb?.wir || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.wir}
          error={!!localErrors.wir}
          onBlur={validate}
        />
        <InputField
          label="ihr"
          name="ihr"
          value={verb?.ihr || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.ihr}
          error={!!localErrors.ihr}
          onBlur={validate}
        />
        <InputField
          label="sie/Sie"
          name="sieSie"
          value={verb?.sieSie || ""}
          fullWidth
          onChange={handleChange}
          required
          helperText={localErrors.sieSie}
          error={!!localErrors.sieSie}
          onBlur={validate}
        />
        <InputField
          label="Not"
          name="note"
          value={verb?.note || ""}
          fullWidth
          multiline
          rows={3}
          onChange={handleChange}
        />
    </div>
    </>
  );
}

export default VerbForm;
