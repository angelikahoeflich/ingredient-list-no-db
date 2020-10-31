import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import StapleList from './Components/StapleList';

class App extends Component{
  constructor(){
    super();

    this.state = {
      list: {
        staples: [],
        additional: [],
        selected: []
      }

    }
    this.addToSelected=this.addToSelected.bind(this);
  }
  
  componentDidMount() {
      Axios
        .get("http://localhost:4040/api/ingredients")
        .then((res) => {
          this.setState({ list: res.data });
        })
        .catch((err) => console.log(err));

  }

  addToSelected(click){
    
    console.log(click.target.getAttribute("index"))
  }s
  
  render(){
  return (
    <div>
      <header className="header">
        <h1>WHAT'S IN YOUR FRIDGE?</h1>
      </header>

      <main className="main-list">
        <section className="staples">
          <h3>Staple Ingredients:</h3>
          <StapleList staples={this.state.list.staples} add={this.addToSelected}/>
        </section>

        <section className="additionals">
          <h3>Additional Ingredients:</h3>
            <input type="text"/>
        </section>

        <section className="">
          <h3>Selected Ingredients:</h3>

        </section>
      </main>

    </div>
    );
  }
}

export default App;
