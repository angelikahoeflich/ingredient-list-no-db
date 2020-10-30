import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {

    }
  }
  
  
  render(){
  return (
    <div>
      <header>
        <h1>WHAT'S IN YOUR FRIDGE?</h1>
      </header>

      <main className="main-list">
        <section className="staples">
          <h3>Staple Ingredients:</h3>
        </section>
        <section className="additionals">
          <h3>Additional Ingredients:</h3>
            <input type="text"/>
        </section>

        <section className="">
          <h3>Selected Ingredients</h3>
        </section>
      </main>


    </div>
    );
  }
}

export default App;
