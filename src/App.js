import React, { Component } from 'react';
import CounterFood from './components/CounterFood/CounterFood.js';
import MenuFood from './components/MenuFood/MenuFood.js';
import HamburgerImg from './imgFasfood/hamburger.jpg';
import CheeseburgerImg from './imgFasfood/cheeseburger.jpg';
import Friesimg from './imgFasfood/fries.jpg';
import Coffeeimg from './imgFasfood/coffee.jpeg';
import TeaImg from './imgFasfood/tea.png';
import ColaImg from './imgFasfood/cola.jpg';

class App extends Component {

    state = {
        fastFood: [
            {name: 'Hamburger', price: 80, img: HamburgerImg},
            {name: 'Cheeseburger', price: 90, img: CheeseburgerImg},
            {name: 'Fries', price: 45, img: Friesimg},
            {name: 'Coffee', price: 70, img: Coffeeimg},
            {name: 'Tea', price: 50, img: TeaImg},
            {name: 'Cola', price: 40, img: ColaImg},
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
                              image={food.img}
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
