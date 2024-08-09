import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { grades } from '../data/grades';

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

  
const ThemeList = () => {
  const { themeId } = useParams();
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const fetchThemes = () => {
      const grade = grades.find(g => g.id === themeId);
      if (grade) {
        setThemes(grade.themes);
      }
    };

    fetchThemes();
  }, [themeId]);

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Тақырыптар
      </Typography>
      <Grid container spacing={4}>
        {themes.map((theme) => (
          <Grid item key={theme.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={getThumbnailUrl(theme.videoUrl)}
                alt={`${theme.name} image`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {theme.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {theme.description.substring(0, 100)}...
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={`/themes/${theme.id}`}>
                  Толығырақ
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ThemeList;
