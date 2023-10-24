import React from "react";
import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RecipeDetails = ({ recipe, onToggleFavorite, userFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(recipe.id, !isFavorite);
  };

  const cardStyle = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  return (
    <Box
      p={3}
      mt={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {recipe && (
        <Card style={cardStyle}>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${recipe.image}`}
            alt={recipe.title}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {recipe.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Author: {recipe.author}
            </Typography>
            <IconButton onClick={handleToggleFavorite}>
              {userFavorites.includes(recipe.id) ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Typography variant="h6" gutterBottom>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6" gutterBottom>
              Instructions
            </Typography>
            <Typography variant="body1">{recipe.instructions}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default RecipeDetails;
