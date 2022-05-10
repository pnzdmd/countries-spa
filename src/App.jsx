import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePages from './pages/HomePages/HomePages';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePages />
          </Route>
          <Route path='/country/:name' component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
