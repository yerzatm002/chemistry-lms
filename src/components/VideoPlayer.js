// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { Container } from '@mui/material';

const VideoPlayer = ({ url }) => {
  return (
    <Container>
      <ReactPlayer url={url} controls width="100%" />
    </Container>
  );
};

export default VideoPlayer;
