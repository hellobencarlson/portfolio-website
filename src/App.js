import Home from './features/Home/Home';
import NotFound from './features/NotFound/NotFound';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} />
            <NotFound component={NotFound} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
