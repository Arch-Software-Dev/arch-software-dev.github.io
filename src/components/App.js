import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';



const App = () => {
  return (
    <Router>
      <div className="App">

        {/* Header */}
        <Header />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/contact" component={ContactUs} />

        </Switch>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
