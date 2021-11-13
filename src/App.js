import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/LoginOrRegister/Login/Login';
import Register from './components/LoginOrRegister/Register/Register';
import Context from './Context/Context';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import About from '../src/components/About/About'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <div className="App">
    <Context>
   <BrowserRouter>
   <Header></Header>
   <Switch>
   <Route exact path='/'>
    <Home></Home>
   </Route>
   <Route path='/home'>
    <Home></Home>
   </Route>
   <Route path='/about'>
   <About></About>
   </Route>
   <Route path='/blog'>
   <Blog></Blog>
   </Route>
   <Route path='/contact'>
   <Contact></Contact>
   </Route>
   <Route path='/login'>
    <Login></Login>
   </Route>
   <Route path='/register'>
    <Register></Register>
   </Route>
   <Route path='/explore'>
    <Explore></Explore>
   </Route>
   <PrivateRoute path='/HomeService/:id'>
    <OrderPlace></OrderPlace>
   </PrivateRoute>
   

   <PrivateRoute path='/dashboard'>
   <Dashboard></Dashboard>
   </PrivateRoute>

   </Switch>
   </BrowserRouter>
   </Context>
    </div>
  );
}

export default App;
