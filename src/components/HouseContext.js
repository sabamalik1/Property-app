import React, { createContext, useEffect, useState } from "react";
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price Range (any)");
  const [loading, setLoading] = useState(false);

  // Return all countries//////
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    // console.log(allCountries);
    // remove duplicates///
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    // console.log(uniqueCountries);
    // set country states..............
    setCountries(uniqueCountries);
  }, []);

  // Return all properties//////
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    // console.log(allProperties);
    // remove duplicates///
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    // console.log(uniqueProperties);
    // set country states..............
    setProperties(uniqueProperties);
  }, []);

  // function handleClick(){
  //   console.log("clicked");
  // }

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Check if the selected criteria match the house data
      const countryMatch = isDefault(country) || house.country === country;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch =
        isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return countryMatch && propertyMatch && priceMatch;

      // if (isDefault(country) && isDefault(property) && isDefault(price)) {
      //   return house;
      // }
// if all values are default
if(isDefault(country) && isDefault(property) && isDefault(price)){
  return house
}

// if country is not default
if(! isDefault(country) && isDefault(property) && isDefault(price)){
  return house.country === country
}

// if property is not default
if(!isDefault(property) && isDefault(country) && isDefault(price)){
  return house.type === property
}

// if price is not default
if(!isDefault(price) && isDefault(country) && isDefault(property)){
  if(housePrice >= minPrice && housePrice <=maxPrice){
    return house 
  }
}

// if country and property is not default
if(!isDefault(country) && isDefault(property) && isDefault(price)){
  return house.country === country && house.type === property
}

// if country and price is not default
if(!isDefault(country) && isDefault(property) && !isDefault(price)){
  if(housePrice >=minPrice && housePrice<=maxPrice){
    return house.country === country
  }
}

// if property and price is not default
if(isDefault(country) && !isDefault(property) && !isDefault(price)){
  if(housePrice >=minPrice && housePrice <= maxPrice){
    return house.type=== property
  } 
}

    });

    setHouses(newHouses);
    // console.log(newHouses);
    setTimeout(()=>{
      return newHouses.length <1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
    },1000)
  };

  //   const handleClick = () => {
  //     // console.log(country, property, price);
  //     // create a function that checks if the strings include any
  //     const isDefault = (str) => {
  //       return str.split(" ").includes("(any)");
  //     };
  //     console.log(isDefault(country));

  //     // get filter value of price and parse it into number
  //     // console.log(parseInt(price.split(" ")[0]));
  //     // get first value of price and parse it to number
  //     const minPrice = price.split(" ")[0];
  //     console.log(minPrice);

  //     // get second value of price and parse it to number__
  //     const maxPrice = price.split(" ")[2];
  //     console.log(maxPrice);

  //     const newHouses = housesData.filter((house) => {
  //       const housePrice = parseInt(house.price);
  //       // console.log(housesData)

  //       // if all values are selected
  //       if (
  //         house.country === country &&
  //         house.type === property &&
  //         housePrice >= minPrice &&
  //         housePrice <= maxPrice
  //       ) {
  //         return house
  //       }

  //       if(isDefault(country) && isDefault(property) && isDefault(price)){
  //         return house
  //       }
  //       // setHouses(newHouses)
  //     });
  // setHouses(newHouses)
  //     console.log(newHouses)
  //     // window.requestIdleCallback(() => {

  //     // });
  //     // Perform filtering logic based on selected criteria
  //     // setLoading(true);
  //     // const filteredHouses = houses.filter((house) => {
  //     //   return (
  //     //     (country === "Location (any)" || house.country === country) &&
  //     //     (property === "Property (any)" || house.property === property) &&
  //     //     (price === "Prce Range (any)" ||
  //     //       parseInt(house.price) <= parseInt(price))
  //     //   );

  //     // });

  //     //   // Update the state with the filtered houses
  //     //   setHouses(filteredHouses);
  //     //   setLoading(false);
  //   };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        houses,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
