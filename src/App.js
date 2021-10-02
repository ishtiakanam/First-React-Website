import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
       <Switch>
         <Route exact path='/'>
             <Shop></Shop>
          </Route> 
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/notFound'>
            <NotFound></NotFound>
          </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
