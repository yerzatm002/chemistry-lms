import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import VideoPlayer from './VideoPlayer';
import Description from './Description';
import Quiz from './Quiz';
import { grades } from '../data/grades';

const ThemeDetail = () => {
  const { themeId } = useParams();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const fetchTheme = () => {
      let foundTheme = null;
      for (const grade of grades) {
        foundTheme = grade.themes.find(t => t.id === themeId);
        if (foundTheme) break;
      }
      setTheme(foundTheme);
    };

    fetchTheme();
  }, [themeId]);

  if (!theme) {
    return <Typography>Жүктелуде...</Typography>;
  }

  return (
    <Container>
      <Box sx={{ maxHeight: '80vh', overflowY: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>{theme.name}</Typography>
        <VideoPlayer url={theme.videoUrl} />
        <Description content={theme.description} />
        <Quiz quizData={theme.quiz} />
      </Box>
    </Container>
  );
};

export default ThemeDetail;
