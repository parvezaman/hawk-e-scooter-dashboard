import { Button, Typography } from "@mui/material";
import * as React from "react";
import "./ShowPackages.css";
import TestShowPackages from "./testShowPackages";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const ShowPackages = ({ allPackages }) => {
  const { packageName, packageDescription, _id, packageImage } = allPackages;
  // console.log(allPackages.allPackages.packageName)
  const handleDelete = (id) => {
    // console.log("clicked with", id);
    const proceed = window.confirm("You are going to delete a package!!!");
    if (proceed) {
      const url = `https://fast-thicket-64971.herokuapp.com/packages/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount == 1) {
            alert("1 package has been deleted");
          }
        });
    }
  };
  return (
    <Grid item xs={12} md={4} sm={6} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={packageImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {packageName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShowPackages;
