//  import { link } from "fs";
//  import css from "styled-jsx/css";
{/* <link rel="stylesheet" href="style.css"></link> */ }
import React from 'react';
import CountryInfo from "@/app/props";





export default function country_name({ params }: { params: { country_name: string } }) {
    const countries: {
        name: string;
        population: number;
        capital: string;
        currency: string;
    }[]
     = [{
        name: "Pakistan",
        population: 235.82,
        capital: "Islamabad",
        currency: "Pakistani Rupee",
    }, {
        name: "India",
        population: 1.42,
        capital: "New Delhi",
        currency: "Indian Rupee",
    },
    {
        name: "China",
        population: 1.41,
        capital: "Beijing",
        currency: "Renminbi",
    },
    {
        name: "Turkey",
        population: 85.34,
        capital: "Ankara",
        currency: "Turkish Lira",
    },
    {
        name: "Japan",
        population: 124.631,
        capital: "Tokyo",
        currency: "Japanese Yen",
    },
    ];


    function findCountry(country_url: string) {
        return countries.find(country => country_name.name);

    }
    const result = findCountry(params.country_name);






    return (
        <div>
            {
                result ? (
                    <CountryInfo>
                        <h1> Country name: {result.name}</h1>
                        <h1> Country capital:{result.capital} </h1>
                        <h1> Country population: {result.population}</h1>
                        <h1> Country currency: {result.currency}</h1>
                </CountryInfo>
                ) : (
                    <h1>country not found</h1>
                )
            }
        </div>
    );
}

