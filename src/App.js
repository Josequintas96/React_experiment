import logo from './logo.svg';
import './App.css';
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import {Router, Route} from "react-router";

import ReactX from "./Componets/React.js";
import Mirror from "./Componets/Mirror.js";
import Mirror2 from "./Componets/Mirror2.js";
import Buttons from "./Componets/Buttons.js";
import Calculations from "./Componets/Calculations.js";
import Square from "./Componets/Square.js";
//import { AuthProvider } from './components/Auth';



function App() {
  return (
 //   <AuthProvider>
      <Router>
      <div className="App_Body" >
              <div className='AppB'>              
                <Switch>
                    <Route path="/" exact component={ReactX} />
                    <Route path="/Mirror" component={Mirror} />
                    <Route path="/Mirror2" component={Mirror2} />
                    <Route path="/React" component={ReactX} />
                    
                    <Route path="/Buttons" component={Buttons} />
                    <Route path="/Calculations" component={Calculations} />
                    <Route path="/Square" component={Square} />
                    {/* <Route path="/Login" render={(props) => (<Login Input={this.state.username} Input2={this.state.password} Input3 = {this.Login_in} /> )} /> */}
              </Switch>
            </div>  
          </div>
      </Router>
 //   </AuthProvider>

  );
}

export default App;
