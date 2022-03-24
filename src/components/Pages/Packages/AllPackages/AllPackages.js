import React, { useEffect, useState } from "react";
import ShowPackages from "../ShowPackages/ShowPackages";
import Grid from "@mui/material/Grid";

const AllPackages = () => {
  const [allPackages, setAllPackages] = useState([]);

  useEffect(() => {
    fetch("https://fast-thicket-64971.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setAllPackages(data));
  }, [allPackages]);
  return (
    <Grid container spacing={2}>
      {allPackages.map((allPackages) => (
        <ShowPackages key={allPackages._id} allPackages={allPackages} />
      ))}
    </Grid>
  );
};

export default AllPackages;
