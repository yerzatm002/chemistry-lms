import React from 'react';
import { Container, Typography, List, ListItem, Card, CardContent, CardActionArea, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { games } from '../data/games'; // Import mock data

const GameCatalog = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Ойындар
      </Typography>
      <List>
        {games.map((game) => (
          <ListItem
            key={game.id}
            sx={{ marginBottom: '15px', borderRadius: '10px', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}
          >
            <CardActionArea
              component={Link}
              to={`/games/${game.id}`}
              sx={{ display: 'block' }}
            >
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{game.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {game.description}
                  </Typography>
                  <Box sx={{ marginTop: '10px' }}>
                    <Button variant="contained" color="primary" href={game.url} target="_blank">
                      Химия ойынын ойнау
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </CardActionArea>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GameCatalog;
