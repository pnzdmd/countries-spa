import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePages from './pages/HomePages/HomePages';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
}

export default App;
