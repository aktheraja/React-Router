import React from 'react';
import './App.css';
import Nav from'./Nav';
import Shop from './Shop'
import About from "./About";
import Item from "./itemDetails";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={Item} />
    </Switch>
    </div>
      </Router>
  );

}
const Home=()=>{
  return(
      <div>
        <h1>Home Page</h1>
      </div>
  )
}

export default App;
