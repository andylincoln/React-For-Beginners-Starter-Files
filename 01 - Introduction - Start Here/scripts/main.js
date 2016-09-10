var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/*
 * Import Components
 */
import NotFound from "./components/NotFound";
import StorePicker from "./components/StorePicker";
import Fish from "./components/Fish";
import AddFishForm from "./components/AddFishForm";
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import App from "./components/App";

/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
