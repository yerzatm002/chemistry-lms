// src/components/FavoritesList.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { firestore, auth } from '../firebase';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const user = auth.currentUser;
      if (user) {
        const favoritesCollection = collection(firestore, 'favorites');
        const q = query(favoritesCollection, where('userId', '==', user.uid));
        const favoritesSnapshot = await getDocs(q);
        setFavorites(favoritesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (favoriteId) => {
    await deleteDoc(doc(firestore, 'favorites', favoriteId));
    setFavorites(favorites.filter(favorite => favorite.id !== favoriteId));
  };

  return (
    <Container>
      <Typography variant="h4">Таңдаулылар</Typography>
      <List>
        {favorites.map((favorite) => (
          <ListItem key={favorite.id}>
            <ListItemText primary={favorite.name} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleRemoveFavorite(favorite.id)}
            >
              Жою
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FavoritesList;
