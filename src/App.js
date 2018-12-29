import React, { Component } from 'react';
import CounterFood from './components/CounterFood/CounterFood.js';
import MenuFood from './components/MenuFood/MenuFood.js';

class App extends Component {

    state = {
        fastFood: [
            {name: 'Hamburger', price: 80},
            {name: 'Cheeseburger', price: 90},
            {name: 'Fries', price: 45},
            {name: 'Coffee', price: 70},
            {name: 'Tea', price: 50},
            {name: 'Cola', price: 40},
        ]
    };

  render() {

    return (
      <div className="container">
          <h1 style={{textAlign: 'center'}}>Fast Food1</h1>

          <div className="content">
              <div className="CounterBlock">
                  <CounterFood>
                      <p>Order is empty!</p>
                      <p>Please add some items!</p>
                  </CounterFood>
              </div>

              <div className="MenuBlock">
                  {
                      this.state.fastFood.map((food, index) => (
                          <MenuFood
                              key={index}
                            name={food.name}
                            price={food.price}
                          />
                      ))
                  }
              </div>
          </div>

      </div>
    );
  }
}

export default App;
