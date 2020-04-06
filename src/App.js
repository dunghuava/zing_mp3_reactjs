import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import ZingChartPage from './pages/zingchart/ZingChartPage';
import ReleasePage from './pages/release/ReleasePage';

class App extends Component {
  render() {
    return (
      <div className="z-app">
        <Router>
            <Header/>
                <Switch>
                      <Route exact path ="/" component = {HomePage}/>
                      <Route path ="/zing-chart" component = {ZingChartPage} />
                      <Route path ="/new-release" component = {ReleasePage} />
                      <Route component = {HomePage}/>
                </Switch>
            <Footer/>
         </Router>
      </div>
    );
  }
}

export default App;