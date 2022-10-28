import React, { useContext, useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import LocationContext from '../../context/LocationContext';
import './Location.css';

function Location() {
  const {
    getCities, getCountries, countries, cities,
  } = useContext(LocationContext);

  const [selectedCities, setSelectedCities] = useState([]);
  const [location, setLocation] = useState({ country: '', city: '' });
  const navigate = useNavigate();

  useEffect(() => {
    getCities();
    getCountries();
  }, []);

  const handleCountryChange = ({ target: { value } }) => {
    const filteredCities = cities.filter(({ countryCode }) => countryCode === value);
    setSelectedCities(filteredCities);
    setLocation({ country: value, city: '' });
  };

  const handleCityChange = ({ target: { value } }) => {
    if (value !== 'default') {
      setLocation((prevState) => ({ ...prevState, city: value }));
    } else {
      setLocation((prevState) => ({ ...prevState, city: '' }));
    }
  };

  const isButtonDisabled = () => {
    if (location.country === '' || location.city === '') {
      return true;
    } return false;
  };

  return (
    <section>
      <h2 className="text-center my-5">Onde você queria fazer um intercâmbio?</h2>
      <Form
        className="mx-auto"
        onSubmit={() => navigate('/success')}
      >
        <FloatingLabel
          controlId="country"
          label="País"
          defaultValue="default"
          onChange={handleCountryChange}
          className="mx-3 my-3"
        >
          <Form.Select aria-label="Escolha um País!">
            <option value="default" disabled={location.country !== ''}>Escolha um país</option>
            { countries.map(({ name, code }) => (
              <option
                key={code}
                value={code}
              >
                {name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel
          controlId="city"
          label="Cidade"
          defaultValue="default"
          onChange={handleCityChange}
          className="mx-3 my-3"
        >
          <Form.Select disabled={location.country === ''} aria-label="Escolha uma Cidade!">
            <option value="default" disabled={location.city !== ''}>Escolha uma cidade</option>
            { selectedCities.length === 0
              ? <option value="capital">Capital</option>
              : selectedCities.map(({ code, name, namePTBR }) => (
                <option
                  key={code}
                  value={!namePTBR ? name : namePTBR}
                >
                  {!namePTBR ? name : namePTBR}
                </option>
              ))}
          </Form.Select>
        </FloatingLabel>

        <div className="location-button mx-auto my-3">
          <Button
            variant="outline-success"
            type="submit"
            disabled={isButtonDisabled()}
          >
            Let&apos;s go!
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default Location;
