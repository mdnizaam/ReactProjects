import {Route ,Switch, Redirect} from 'react-router-dom';
import AllQoutes from './pages/AllQoutes';
import NewQoute from './pages/NewQoute';
import QouteDetail from './pages/QouteDetail';
import Layout from "./components/layout/Layout"
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/qoutes"/>
      </Route>
      <Route path="/qoutes" exact>
        <AllQoutes/>
      </Route>
      <Route path="/qoutes/:qouteId">
        <QouteDetail/>
      </Route>
      <Route path="/new-qoute">
        <NewQoute/>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
