import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Services from './containers/Services/Services';
import Contact from './containers/Contact/Contact';
import Admin from './containers/Admin/Admin';
import NotFound from './containers/NotFound/NotFound.js';
import Footer from './components/Footer/Footer';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Layout>

        <Route render = { ({ location }) => (
          <React.Fragment>
            <Navigation active = { location.pathname.split('/')[1] } />

            <Switch location = { location }>
              <Route path = '/' exact component = { Home } />      
              <Route path = '/about' exact component = { About } />
              <Route path = '/projects' exact component = { Projects } />
              <Route path = '/services' exact component = { Services } />
              <Route path = '/contact' exact component = { Contact } />
              <Route path = '/admin' exact component = { Admin } />
              <Route render = { () => <NotFound /> } />
            </Switch>

            <Footer />
          </React.Fragment>
        )} />
        
      </Layout>
    )
  }
}

export default App;
