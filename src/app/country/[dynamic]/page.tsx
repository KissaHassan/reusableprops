//  import { link } from "fs";
//  import css from "styled-jsx/css";
{/* <link rel="stylesheet" href="style.css"></link> */ }
import React from 'react';
import CountryInfo from "@/app/props";
import App from './App';
import './styles.css'; // Adjust this path as needed







export default function dynamic({ params }: { params: { dynamic: string } }) {
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
        return countries.find(country => dynamic.name);

    }
    const result = findCountry(params.dynamic);






//     return (
//         <div>
//             {
//                 result ? (
//                     <CountryInfo
//                        <h1> Country name: {result.name}</h1>
//                         Country capital:{result.capital}
//                         Country population: {result.population}
//                         Country currency: {result.currency}
//                     />
//                 ) : (
//                     <h1> country not found</h1>
//                 )
//             }
//         </div>
//     );
// }

return (
    <div className="bg-blue">
        {
            result ? (
                <div>
                    <h1>Country name: {result.name}</h1>
                    <h1> <p>Country capital: {result.capital}</p></h1>
                    <h1> <p>Country population: {result.population}</p></h1>
                    <h1><p>Country currency: {result.currency}</p></h1>
                </div>
            ) : (
                <h1>Country not found</h1>
            )
        }
    </div>
);
}