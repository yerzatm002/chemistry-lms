// src/components/ProgressTracker.js
import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../firebase';
import { Container, Typography, LinearProgress } from '@mui/material';

const ProgressTracker = ({ themeId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      const user = auth.currentUser;
      if (user) {
        const progressDoc = await firestore.collection('progress').doc(`${user.uid}_${themeId}`).get();
        if (progressDoc.exists) {
          setProgress(progressDoc.data().progress);
        }
      }
    };

    fetchProgress();
  }, [themeId]);

  return (
    <Container>
      <Typography variant="h6">Сіздің прогрессіңіз:</Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Container>
  );
};

export default ProgressTracker;
