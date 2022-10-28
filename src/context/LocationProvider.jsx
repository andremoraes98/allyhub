import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import LocationContext from './LocationContext';

function LocationProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const getCountries = async () => {
    try {
      const result = await fetch('https://amazon-api.sellead.com/country');
      const fetchedCountries = await result.json();

      const selectedCountries = fetchedCountries
        .map(({ name, code }) => ({
          label: name, value: code,
        }))
        .sort((a, b) => {
          if (a.label > b.label) {
            return 1;
          } if (a.label < b.label) {
            return -1;
          } return 0;
        });

      setCountries(selectedCountries);
    } catch (e) {
      throw new Error(`Failed to fetch country: ${e}`);
    }
  };

  const getCities = async () => {
    try {
      const result = await fetch('https://amazon-api.sellead.com/city');
      const fetchedCities = await result.json();

      const selectedCities = fetchedCities
        .map(({
          country_code: countryCode,
          name_ptbr: namePTBR,
          name,
        }) => {
          if (!namePTBR) {
            return {
              countryCode,
              value: name,
              label: name,
            };
          } return {
            countryCode,
            value: namePTBR,
            label: namePTBR,
          };
        })
        .sort((a, b) => {
          if (a.value > b.value) {
            return 1;
          } if (a.value < b.value) {
            return -1;
          } return 0;
        });

      setCities(selectedCities);
    } catch (e) {
      throw new Error(`Failed to fetch city: ${e}`);
    }
  };

  const context = useMemo(() => ({
    countries,
    cities,
    getCities,
    getCountries,
  }), [countries, cities]);

  return (
    <LocationContext.Provider value={context}>
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LocationProvider;
