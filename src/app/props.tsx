
import React from 'react';

interface CountryInfoProps {
    name: string;
    capital: string;
    population: number;
    currency: string;
}

// lets create CountryInfo component that takes props
const CountryInfo: React.FC<CountryInfoProps> = ({ name, capital, population, currency }) => {
    return (
        <div>
            <h1>Country Name: {name}</h1>
            <h1>Country Capital: {capital}</h1>
            <h1>Country Population: {population} million</h1>
            <h1>Country Currency: {currency}</h1>
        </div>
    );
};

export default CountryInfo;
