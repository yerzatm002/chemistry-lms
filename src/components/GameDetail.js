import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { games } from '../data/games'; // Import mock data

const GameDetail = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = () => {
      const foundGame = games.find(g => g.id === gameId);
      setGame(foundGame);
    };

    fetchGame();
  }, [gameId]);

  if (!game) {
    return <Typography>Жүктелуде...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>{game.name}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>{game.description}</Typography>
      <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', marginBottom: '20px' }}>
        <iframe 
          src={game.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={game.name}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </Box>
    </Container>
  );
};

export default GameDetail;
