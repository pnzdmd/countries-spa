import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Controls from '../../components/Controls/Controls';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import { ALL_COUNTRIES } from '../../config';

const HomePages = ({ countries, setCountries }) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((countries) => countries.region.includes(region));
    }

    if (search) {
      data = data.filter((countries) =>
        countries.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFiltredCountries(data);
  };

  useEffect(() => {
    if (!countries.length)
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filtredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };
          return (
            <Card
              key={country.name}
              onClick={() => navigate(`/country/${country.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePages;
