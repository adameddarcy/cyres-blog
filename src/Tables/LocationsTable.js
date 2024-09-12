import React from 'react';
import AnimatedTable from "../components/AnimatedTable";

const localData = [
    { Locations: 'Global', Count: '9.38%' },
    { Locations: 'USA', Count: '9.38%' },
    { Locations: 'Europe', Count: '50%' },
    { Locations: 'Europe, India, Middle East & Australia', Count: '3.13%' },
    { Locations: 'Europe & USA', Count: '9.38%' },
    { Locations: 'Europe, USA & India', Count: '6.25%' },
    { Locations: 'Europe, USA, Canada & Asia', Count: '3.13%' },
    { Locations: 'Europe & China', Count: '6.25%' },
    { Locations: 'Europe, USA, Canada, India, Middle East and Australia', Count: '3.13%' },
];

const LocationsTable = () => {
    return (
        <div>
            <h1>Organisation Locations and Frequency (Table I)</h1>
            <AnimatedTable data={localData}/>
        </div>
    );
};

export default LocationsTable;
