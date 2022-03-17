import React, { useEffect, useState } from 'react';
import ShowPackages from '../ShowPackages/ShowPackages';

const AllPackages = () => {
    const [allPackages, setAllPackages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then(res => res.json())
            .then(data => setAllPackages(data));
    }, [allPackages])
    return (
        <div>
            {
                allPackages.map(allPackages => <ShowPackages
                    key={allPackages._id}
                    allPackages={allPackages}
                />)
            }
        </div>
    );
};

export default AllPackages;