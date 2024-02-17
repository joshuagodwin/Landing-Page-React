import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import Investors from './pages/Investors/Investors';
import DeleteData from './pages/DeleteData/DeleteData';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/investors' component={Investors} />
            <Route path='/delete-data' component={DeleteData} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
