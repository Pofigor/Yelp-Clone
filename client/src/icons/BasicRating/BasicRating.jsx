import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({restourant_id}) {


const onChangeRating = (event, newValue) => {
  setValue(newValue);
}


const [value, setValue] = React.useState(2);
// console.log("value STATE===>>>>", value)



React.useEffect(() => {
  (async () => {
   try {
    fetch ('http://localhost:3001/rating', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({restourant_id, value})
    });
   } catch (error) {
    console.log(error);
   }
  })()}, []);


 
  

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

