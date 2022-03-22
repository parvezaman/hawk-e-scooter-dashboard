import React, { useEffect, useState } from 'react';
import ShowCustomers from '../ShowCustomers/ShowCustomers';

const AllCoustomers = () => {
    const [allCoustomers, setAllCustomers] = useState([]);

     useEffect(()=>{
         fetch("https://fast-thicket-64971.herokuapp.com/users")
         .then(res => res.json())
         .then(data => setAllCustomers(data))
     },[allCoustomers])
    return (
        <div>
            {
                allCoustomers.map(allCustomers=><ShowCustomers
                key={allCustomers._key}
                allCustomers = {allCustomers}
                />)
            }
        </div>
    );
};

export default AllCoustomers;