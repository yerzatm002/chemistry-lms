import React from 'react';
import { Container, Typography, List, ListItem, Card, CardContent, CardActionArea, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { grades } from '../data/grades';

const getDifficultyStyles = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return { backgroundColor: 'green', color: 'white' };
    case 'Medium':
      return { backgroundColor: 'yellow', color: 'black' };
    case 'Hard':
      return { backgroundColor: 'red', color: 'white' };
    case 'Very Hard':
      return { backgroundColor: 'orange', color: 'white' };
    case 'Expert':
      return { backgroundColor: 'purple', color: 'white' };
    default:
      return { backgroundColor: 'gray', color: 'white' };
  }
};

const CourseCatalog = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Курстар
      </Typography>
      <List>
        {grades.map((grade) => (
          <ListItem
            key={grade.id}
            sx={{ marginBottom: '15px', borderRadius: '10px', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}
          >
            <CardActionArea
              component={Link}
              to={`/courses/${grade.id}`}
              sx={{ display: 'block' }}
            >
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={grade.imageUrl}
                  alt={`${grade.name} image`}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{grade.name}</Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      ...getDifficultyStyles(grade.difficulty)
                    }}
                  >
                    Қиындық деңгейі: {grade.difficulty}
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

export default CourseCatalog;
