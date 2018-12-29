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
            {name: 'Hamburger', price: 80, img: HamburgerImg, count: 0},
            {name: 'Cheeseburger', price: 90, img: CheeseburgerImg, count: 0},
            {name: 'Fries', price: 45, img: Friesimg, count: 0},
            {name: 'Coffee', price: 70, img: Coffeeimg, count: 0},
            {name: 'Tea', price: 50, img: TeaImg, count: 0},
            {name: 'Cola', price: 40, img: ColaImg, count: 0},
        ],
        totalPrice: 0
    };

    onClickAddHandler = (foodAdd) => {
        let totalPrice = 0;
        let fastFood = [...this.state.fastFood];
        for (var i = 0; i < fastFood.length; i++){
            if (fastFood[i].name === foodAdd){
                fastFood[i].count++;
            }
        }
        console.log(totalPrice);
        this.setState({fastFood});
        this.getTotalPrice();
    };

    onClickRemoveHandler = (foodRemove) => {
        let fastFood = [...this.state.fastFood];
        for (var i = 0; i < fastFood.length; i++){
            if (fastFood[i].name === foodRemove){
                fastFood[i].count--;
            }
            if (fastFood[i].count < 0){
                fastFood[i].count = 0
            }
        }
        this.setState({fastFood});
        this.getTotalPrice();
    }

    getTotalPrice = () => {
        const fastFood = [...this.state.fastFood];
        let totalPrice = 0;

        for (let i = 0; i < fastFood.length; i++) {
            if (fastFood[i].count) {
                let ingrPrice = fastFood[i].count * fastFood[i].price;
                totalPrice += ingrPrice;
            }
        }

        this.setState({totalPrice});

    };
  render() {

    return (
      <div className="container">
          <h1 style={{textAlign: 'center'}}>Fast Food!</h1>
          <p style={{textAlign: 'center', fontSize: "20px", fontWeight: 'bold'}}>Total price: {this.state.totalPrice} KGS</p>

          <div className="content">
              <div className="MenuBlock">
                  {
                      this.state.fastFood.map((food, index) => (
                          <MenuFood
                              key={index}
                              image={food.img}
                            name={food.name}
                            price={food.price}
                              onClickAddFoods={this.onClickAddHandler.bind(this, food.name)}
                          />
                      ))
                  }
              </div>
              <div className="CounterBlock">
                  {
                      this.state.fastFood.map((foodsinfo, index) => (
                          <CounterFood
                            key={index}
                            name={foodsinfo.name}
                            count={foodsinfo.count}
                            price={foodsinfo.price}
                            onClickRemove={this.onClickRemoveHandler.bind(this, foodsinfo.name)}
                          >
                          </CounterFood>
                      ))
                  }
              </div>

          </div>

      </div>
    );
  }
}

export default App;
