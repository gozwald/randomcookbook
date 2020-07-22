import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
  const classes = useStyles();
  const [recipeList, setrecipeList] = useState([]);

  const recipePusher = () => {
    for (let i = 0; i < 9; i++) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(results =>
          setrecipeList(prevState => [...prevState, results.meals[0]])
        )
        .catch(error => console.log("error", error));
    }
  };
  useEffect(() => {
    recipePusher();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar />
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Random Recipe Repository
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Your single source for cookbookery and food based shenanigans for
              the heart, soul, and palate.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <TextField
                    label="Find a recipe"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ type: "search" }}
                  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={0}>
            {recipeList.length === 9 && (
              <Switch>
                <Route path="/:detail">
                  <RecipeDetails global={recipeList} />
                </Route>
                <Route path="/">
                  {recipeList.map((result, index) => (
                    <RecipeList
                      key={result.idMeal}
                      global={result}
                      index={index}
                    />
                  ))}
                </Route>
              </Switch>
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          You reached the bottom!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Yep. You sure did :)
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
