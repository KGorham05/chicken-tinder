import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from "./pages/Home";
import Messages from "./pages/Messages";
import RestIndex from "./pages/RestIndex";
import RestShow from "./pages/RestShow";
import RestNew from "./pages/RestNew";

import restaurantData from './mockRestData';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: restaurantData
    }
  }

  render() {


    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/restindex" render={() => <RestIndex restaurants={this.state.restaurants} />} />
          <Route
            exact path="/restshow/:id"
            render={props => {
              let id = props.match.params.id;
              let restaurant = this.state.restaurants.find(restaurant => restaurant.id === Number(id))
              return <RestShow restaurant={restaurant} />
            }}
          />
          <Route path="/restnew" component={RestNew} />
          {/* <Route path="/restedit/:id" component={RestEdit} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router >
    )
  }
}

export default App;
