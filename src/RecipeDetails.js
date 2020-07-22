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
import { Link, useParams } from "react-router-dom";

export default function RecipeDetails({ global }) {
  let { detail } = useParams();

  console.log(global[detail]);
  return (
    <Grid container item xs={4} spacing={0}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={global[detail].strMeal}
            height="180"
            image={global[detail].strMealThumb}
            title={global[detail].strMeal}
          />
          <CardContent>
            <Box height="10vh">
              <Typography gutterBottom variant="h5">
                {global[detail].strMeal}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Get full Recipe
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
