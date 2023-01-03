import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({restourant_id, value, setValue}) {

// все раюотает, рейтинг записывается в бд, но сам подход неверный
// нужно переработать так, чтобы на главной карточке рейтинг был неактивен
// а внутри, где пишем отзыв, там можно было бы поставить рейтинг

const onChangeRating = (event, newValue) => {
  setValue(newValue);
  
  fetch ('http://localhost:3001/rating', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({restourant_id, newValue})
  });

}
 
  

  return (
    <Box
    
      sx={{
        '& > legend': { mt: 4 },
      }}>

      <Rating
        name="simple-controlled"
        value={value}
        onChange={onChangeRating}
        />

    </Box>
  );

}

