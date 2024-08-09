// src/components/ProfileInfo.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase';

const ProfileInfo = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const profileDoc = doc(firestore, 'users', user.uid);
        const profileSnapshot = await getDoc(profileDoc);
        setProfile({ id: profileSnapshot.id, ...profileSnapshot.data() });
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      const profileDoc = doc(firestore, 'users', user.uid);
      await updateDoc(profileDoc, profile);
      setEditMode(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Профиль</Typography>
      {editMode ? (
        <>
          <TextField
            label="Аты-жөні"
            name="name"
            value={profile.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Электрондық пошта"
            name="email"
            value={profile.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Сақтау
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1">Аты-жөні: {profile.name}</Typography>
          <Typography variant="body1">Электрондық пошта: {profile.email}</Typography>
          <Button variant="contained" color="primary" onClick={() => setEditMode(true)}>
            Өңдеу
          </Button>
        </>
      )}
    </Container>
  );
};

export default ProfileInfo;
