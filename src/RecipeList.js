import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import { Router, Switch, Route, Link } from "react-router-dom";

export default function RecipeList({ global, index }) {
  return (
    <Grid container item xs={4} spacing={0}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={global.strMeal}
            height="180"
            image={global.strMealThumb}
            title={global.strMeal}
          />
          <CardContent>
            <Box height="10vh">
              <Typography gutterBottom variant="h5">
                {global.strMeal}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/${index}`}>
            <Button size="small" color="primary">
              Get full Recipe
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
