import React from 'react';
import { Container, Typography, List, ListItem, Card, CardContent, CardActionArea, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { labWorks } from '../data/labs';

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

const getThumbnailUrl = (videoUrl) => {
  let videoId = '';

  if (videoUrl.includes('youtube.com')) {
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    videoId = urlParams.get('v');
  } else if (videoUrl.includes('youtu.be')) {
    videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
  }

  return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : 'https://via.placeholder.com/150';
};

const LabWorkCatalog = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Лабораториялық жұмыстар
      </Typography>
      <List>
        {labWorks.map((labWork) => (
          <ListItem
            key={labWork.id}
            sx={{ marginBottom: '15px', borderRadius: '10px', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}
          >
            <CardActionArea
              component={Link}
              to={`/lab-works/${labWork.id}`}
              sx={{ display: 'block' }}
            >
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 140 }}
                  image={labWork.imageUrl} // Using the first lab work video as a thumbnail
                  alt={`${labWork.name} image`}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{labWork.name}</Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      ...getDifficultyStyles(labWork.difficulty)
                    }}
                  >
                    Қиындық деңгейі: {labWork.difficulty}
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

export default LabWorkCatalog;
