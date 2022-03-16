import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MiniNav from './components/Navigation/MiniNav';
import Coupon from './components/Pages/Coupon/Coupon';
import CustomerData from './components/Pages/CustomerData/CustomerData';
import CustomerWallet from './components/Pages/CustomerWallet/CustomerWallet';
import DasboardHome from './components/Pages/DasboardHome/DasboardHome';
import Messaging from './components/Pages/Messaging/Messaging';
import Packages from './components/Pages/Packages/Packages';
import Payment from './components/Pages/Payment/Payment';
import ProductCategory from './components/Pages/ProductCategory/ProductCategory';
import Report from './components/Pages/Report/Report';
import SellDashboard from './components/Pages/SellDashboard/SellDashboard';
import SSL from './components/Pages/SSL/SSL';
import Stock from './components/Pages/Stock/Stock';
import Tickets from './components/Pages/Tickets/Tickets';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <MiniNav />
      <Switch>
        <Route exact path={"/"} component={DasboardHome} />
        <Route exact path={"/coupon"} component={Coupon} />
        <Route exact path={"/customerdata"} component={CustomerData} />
        <Route exact path={"/customerwallet"} component={CustomerWallet} />
        <Route exact path={"/messaging"} component={Messaging} />
        <Route exact path={"/packages"} component={Packages} />
        <Route exact path={"/payment"} component={Payment} />
        <Route exact path={"/productcategory"} component={ProductCategory} />
        <Route exact path={"/report"} component={Report} />
        <Route exact path={"/selldashboard"} component={SellDashboard} />
        <Route exact path={"/ssl"} component={SSL} />
        <Route exact path={"/stock"} component={Stock} />
        <Route exact path={"/tickets"} component={Tickets} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;