import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { labWorks } from '../data/labs';

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

const LabWorkDetail = () => {
  const { labWorkId } = useParams();
  const [gradeLabWorks, setGradeLabWorks] = useState([]);

  useEffect(() => {
    const grade = labWorks.find(g => g.id === labWorkId);
    if (grade) {
      setGradeLabWorks(grade.labworks);
    }
  }, [labWorkId]);

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Лабораториялық жұмыстар
      </Typography>
      <List>
        {gradeLabWorks.map((lab) => (
          <ListItem
            key={lab.id}
            sx={{ marginBottom: '15px', borderRadius: '10px', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}
          >
            <CardActionArea
              component={Link}
              to={`/lab-works/${labWorkId}/${lab.id}`}
              sx={{ display: 'block' }}
            >
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 140 }}
                  image={getThumbnailUrl(lab.videoUrl)}
                  alt={`${lab.name} image`}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{lab.name}</Typography>
                  <Typography variant="body2">{lab.description.substring(0, 60)}...</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default LabWorkDetail;
