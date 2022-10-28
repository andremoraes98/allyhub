import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import LocationContext from '../../../context/LocationContext';
import './Location.css';

function Location() {
  const {
    getCities, getCountries, countries, cities,
  } = useContext(LocationContext);

  const [selectedCities, setSelectedCities] = useState([]);
  const [location, setLocation] = useState({ country: [], city: [] });
  const navigate = useNavigate();

  const handleCountryChange = (values) => {
    const countryInitials = values.map(({ value }) => value);
    const filteredCities = cities
      .filter(({ countryCode }) => countryInitials.includes(countryCode))
      .sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        } if (a.label < b.label) {
          return -1;
        } return 0;
      });
    if (filteredCities.length === 0) {
      setSelectedCities([{ value: 'Capital', label: 'Capital' }]);
    } else {
      setSelectedCities(filteredCities);
    }

    const countryName = values.map(({ label }) => label);
    setLocation({ country: countryName, city: [] });
  };

  const handleCityChange = (values) => {
    const cityName = values.map(({ label }) => label);
    setLocation((prevState) => ({ ...prevState, city: cityName }));
  };

  const isButtonDisabled = () => {
    if (location.country.length === 0 || location.city.length === 0) {
      return true;
    } return false;
  };

  useEffect(() => {
    getCities();
    getCountries();
  }, []);

  return (
    <section>
      <h2 className="text-center my-5 mx-3">Quais lugares do mundo você deseja se conectar?</h2>
      <form
        className="mx-auto"
        onSubmit={() => navigate('/success')}
      >
        <Select
          className="basic-multi-select m-3"
          classNamePrefix="select"
          options={countries}
          isMulti
          onChange={handleCountryChange}
          placeholder="Selecione um ou mais países..."
        />

        <Select
          className="basic-multi-select m-3"
          classNamePrefix="select"
          options={selectedCities}
          isMulti
          onChange={handleCityChange}
          placeholder="Selecione uma ou mais cidades..."
        />

        <div className="location-button mx-auto my-3">
          <Button
            variant="outline-success"
            type="submit"
            disabled={isButtonDisabled()}
          >
            Let&apos;s go!
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Location;
