import { cityinfo } from "./cities-info";

export const Citiesinfo: cityinfo[] = [
    { name: "Aswan", attractionSites: ["Abu-Simbel", "Nubian Museum", "Elephantine"] },
    { name: "Cairo", attractionSites: ["The Pyramids", "Nile", "Khan elKhalili"] },
    { name: "Luxor", attractionSites: ["Valley of the Kings", "Karnak", "Luxor Template"] },
    { name: "Sharm El-Sheikh", attractionSites: ["Naama", "Ras Muhammad National Park"] }
  ];
  
  export const citiesWeather = [
    {
      name: "Aswan",
      springN: 23, springM: 40,
      summerN: 28, summerM: 43,
      winterN: 12, winterM: 25,
      autumnN: 22, autumnM: 36,
      visitFrom: "October", visitTo: "April"
    },
    {
      name: "Cairo",
      springN: 18, springM: 30,
      summerN: 23, summerM: 35,
      winterN: 10, winterM: 20,
      autumnN: 20, autumnM: 30,
      visitFrom: "December", visitTo: "January"
    },
    {
      name: "Luxor",
      springN: 17, springM: 35,
      summerN: 25, summerM: 41,
      winterN: 8, winterM: 24,
      autumnN: 13, autumnM: 29,
      visitFrom: "October", visitTo: "April"
    },
    {
      name: "Sharm Elsheikh",
      springN: 21, springM: 30,
      summerN: 29, summerM: 38,
      winterN: 16, winterM: 24,
      autumnN: 20, autumnM: 28,
      visitFrom: "October", visitTo: "November"
    }

  ];

  export type CityWeather = {
    name: string;
    springN: number;
    springM: number;
    summerN: number;
    summerM: number;
    winterN: number;
    winterM: number;
    autumnN: number;
    autumnM: number;
    visitFrom: string;
    visitTo: string;
  };
  
  