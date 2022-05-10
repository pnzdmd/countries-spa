import axios from 'axios';
import { useState, useEffect } from 'react';

import Controls from '../../components/Controls/Controls';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import { ALL_COUNTRIES } from '../../config';

const HomePages = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };
          return <Card key={c.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default HomePages;