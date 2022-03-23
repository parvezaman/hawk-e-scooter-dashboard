import { Button, Typography } from "@mui/material";
import React from "react";
import "./ShowPackages.css";

const ShowPackages = ({ allPackages }) => {
  const { packageName, packageDescription, _id } = allPackages;
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
    <div className="packageStyle">
      <div className="package-items">
        <Typography variant="h3" gutterBottom component="div">
          {packageName}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {packageDescription}
        </Typography>
      </div>
      <div className="package-buttons">
        <Button onClick={() => handleDelete(_id)}>Delete</Button>
      </div>
    </div>
  );
};

export default ShowPackages;
