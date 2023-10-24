// src/components/RecipeList.js
import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Typography, Divider } from '@mui/material';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <List>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => onSelectRecipe(recipe)}>
                <ListItemText primary={recipe.title} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default RecipeList;
