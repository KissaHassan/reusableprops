
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
            Country Name: {name}
            Country Capital: {capital}
            Country Population: {population} million
            Country Currency: {currency}
        </div>
    );
};

export default CountryInfo;
