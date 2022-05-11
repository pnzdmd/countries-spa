import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePages from './pages/HomePages/HomePages';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <HomePages countries={countries} setCountries={setCountries} />
            }
          />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
