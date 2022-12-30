import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({restourant_id}) {

  const [value, setValue] = React.useState(3);
    console.log("value FROM STATE =====", value)


  const onChangeRatingValue = (event) => {
    setValue((prev) => (
      {...prev, [event.target.name]: event.target.value}
    ));
    console.log("event.target.value=============", event.target)
  };


  const onClickRating = async (event) => {
    event.preventDefault();

    await fetch ('http://localhost:3001/rating', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({restourant_id}, value)
    });
      console.log("value FROM STATE =====", value)

    // console.log("value=====", value)
    // console.log("restourant_id===============", restourant_id)

  }



  return (
    <Box
    
      sx={{
        '& > legend': { mt: 4 },
      }}>

      <Rating onClick={onClickRating} name="value" value={value} onChange={onChangeRatingValue} />
      {/* <Rating onClick={onClickRating} name="value" value={value} onChange={(event, newValue) => {setValue(newValue)}} /> */}

 
    </Box>
  );

}
