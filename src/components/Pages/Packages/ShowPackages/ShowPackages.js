import { Typography } from '@mui/material';
import React from 'react';
import './ShowPackages.css';

const ShowPackages = (allPackages) => {
    const { packageName, packageDescription, _id } = allPackages.allPackages
    // console.log(allPackages.allPackages.packageName)
    return (
        <div className='packageStyle'>
            <Typography variant="h3" gutterBottom component="div">
                {packageName}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {packageDescription}
            </Typography>
        </div>
    );
};

export default ShowPackages;