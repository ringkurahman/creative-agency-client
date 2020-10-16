import React, { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import useLocalStorageState from 'use-local-storage-state/dist';
import Dashboard from './pages/Dashboard/Dashboard';
import AddAdmin from './pages/AddAdmin/AddAdmin';
import OrderList from './pages/OrderList/OrderList';
import Review from './pages/OrderList/Review/Review';
import ServiceList from './pages/ServiceList/ServiceList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Default from './pages/Default/Default';
import OurPortfolio from './pages/OurPortfolio/OurPortfolio';
import OurTeam from './pages/OurTeam/OurTeam';
import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';



// Create context to know whether the user logged in or not
export const UserContext = createContext();

const App = () => {

  // Declare local state for login user
  const [loggedInUser, setLogInUser] = useLocalStorageState('info', {});

  return (
    <UserContext.Provider value={[loggedInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route path='/login'>
          <Login />
          </Route>
          <PrivateRoute exact path='/dashboard'>
          <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/makeadmin'>
          <AddAdmin />
          </PrivateRoute>
          <PrivateRoute exact path='/orderlist'>
          <OrderList />
          </PrivateRoute>
          <PrivateRoute exact path='/review'>
          <Review />
          </PrivateRoute>
          <PrivateRoute exact path='/servicelist'>
          <ServiceList />
          </PrivateRoute>
          <Route path='/portfolio'>
            <OurPortfolio />
          </Route>
          <Route path='/team'>
            <OurTeam />
          </Route>
          <Route path='/contactus'>
            <ContactUs />
          </Route>
          <Route path='*'>
            <Default />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
