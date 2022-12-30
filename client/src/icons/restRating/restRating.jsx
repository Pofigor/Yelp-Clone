// import React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';

// export default function BasicRating({restourant_id}) {


//   const [value, setValue] = React.useState(2);
  
//   const onClickRating = async (event) => {
//     event.preventDefault();


//     await fetch ('http://localhost:3001/rating', {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({restourant_id})
//     });
  
//   }


//   return (
//     <Box
    
//       sx={{
//         '& > legend': { mt: 4 },
//       }}>

//       <Rating onClick={onClickRating} name="value" value={value} onChange={(event, newValue) => {setValue(newValue)}} />

//     </Box>
//   );

// }
