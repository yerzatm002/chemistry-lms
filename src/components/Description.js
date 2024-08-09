// src/components/Description.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Description = ({ content }) => {
  return (
    <Container>
      <Typography variant="body1">
        <ReactMarkdown>{content}</ReactMarkdown>
      </Typography>
    </Container>
  );
};

export default Description;
