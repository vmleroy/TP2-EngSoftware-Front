import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props {
  value?: number | string,
  label?: string;
}


const CampoDeTextoLeitura: React.FC<Props> = ({
  value,
  label

}) => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, margin: '1rem' }}>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end', width: '30vw' }}
      >
        <TextField
          label={label}
          defaultValue='-'
          value={value}
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          sx={{ width: '20rem' }}
        />
      </Box>
    </Box>
  );

}

export default CampoDeTextoLeitura;
