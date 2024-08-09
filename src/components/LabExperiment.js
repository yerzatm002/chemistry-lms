import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, CardMedia } from '@mui/material';
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

const LabExperimentDetail = () => {
  const { gradeId, labWorkId } = useParams();
  const [labWork, setLabWork] = useState(null);

  useEffect(() => {
    const fetchLabWork = () => {
      const grade = labWorks.find(g => g.id === gradeId);
      if (grade) {
        const foundLabWork = grade.labworks.find(lw => lw.id === labWorkId);
        if (foundLabWork) {
          setLabWork(foundLabWork);
        }
      }
    };

    fetchLabWork();
  }, [gradeId, labWorkId]);

  if (!labWork) {
    return <Typography>Жүктелуде...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>{labWork.name}</Typography>
      <CardMedia
        component="img"
        sx={{ marginBottom: '20px' }}
        image={getThumbnailUrl(labWork.videoUrl)}
        alt={`${labWork.name} image`}
      />
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>{labWork.description}</Typography>
      <iframe
        src={labWork.simulationUrl}
        width="800"
        height="600"
        style={{ border: 'none', marginBottom: '20px' }}
        title={labWork.name}
        allowFullScreen
      />
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>Нұсқаулар:</Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', whiteSpace: 'pre-line' }}>{labWork.instructions}</Typography>
      {labWork.resources && labWork.resources.map((resource, index) => (
        <Button key={index} href={resource.url} target="_blank" variant="contained" color="primary" sx={{ marginRight: '10px', marginBottom: '10px' }}>
          {resource.name}
        </Button>
      ))}
    </Container>
  );
};

export default LabExperimentDetail;
