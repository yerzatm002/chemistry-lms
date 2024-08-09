// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        p: 2
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Химия LMS. Барлық құқықтар қорғалған.
      </Typography>
    </Box>
  );
};

export default Footer;
