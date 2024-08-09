import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>Басты бет</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img 
          src="https://avatars.mds.yandex.net/i?id=6a1ca0b920477674a28e1d2df75ff06dd6e7fe38-9146954-images-thumbs&n=13" 
          alt="Welcome" 
          style={{ width: '80%', borderRadius: '10px' }} 
        />
      </Box>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1">
          Сәлеметсіз бе! Басты бетке қош келдіңіз. Мұнда сіз соңғы жаңалықтарды, курстарды, және басқа маңызды ақпаратты көре аласыз.
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1">
          Біздің платформамызда химиялық реакциялар, атом құрылымы, қышқылдар мен негіздер сияқты тақырыптарда көптеген ресурстар бар.
        </Typography>
      </Paper>
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>Білім беру суреттері</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <img 
          src="https://avatars.mds.yandex.net/i?id=29eb013602e8e94326e4a60e970cedcd159bfaa37c888af9-13079322-images-thumbs&n=13" 
          alt="Educational Image 1" 
          style={{ width: '30%', borderRadius: '10px' }} 
        />
        <img 
          src="https://avatars.mds.yandex.net/i?id=64326782c732c7ac027da91bf082715d_l-4577918-images-thumbs&n=13" 
          alt="Educational Image 2" 
          style={{ width: '30%', borderRadius: '10px' }} 
        />
        <img 
          src="https://avatars.mds.yandex.net/i?id=bad765fea759d4426c14486e14ae933c_l-5248842-images-thumbs&n=13" 
          alt="Educational Image 3" 
          style={{ width: '30%', borderRadius: '10px' }} 
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
