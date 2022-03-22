import { Typography } from "@mui/material";
import React from "react";
import './ShowCustomer.css';

const ShowCustomers = ({ allCustomers }) => {
  const { userName, userAge, userEmail, userGender } = allCustomers;
  return (
    <div>
      <div className="customerStyle">
        <Typography variant="h3">
           Name: {userName}
        </Typography>
        <Typography variant="h6">
           Email: {userEmail}
        </Typography>
        <Typography variant="h6">
           Age: {userAge}
        </Typography>
        <Typography variant="h6">
           Gender: {userGender}
        </Typography>
      </div>
    </div>
  );
};

export default ShowCustomers;
