import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import StapleList from './Components/StapleList';
import SelectedIngredients from './Components/SelectedIngredients';

class App extends Component{
  constructor(){
    super();

    this.state = {
      staples: [],
      additional: [],
      selected: []
    }
    this.addToSelected=this.addToSelected.bind(this);
  }
  
  componentDidMount() {
      Axios
        .get("http://localhost:4040/api/ingredients")
        .then((res) => {
          this.setState({
            staples: res.data.staples
          });
        })
        .catch((err) => console.log(err));

  }

  addToSelected(click){
    console.log("click.target.getAttribute('index')", click.target.getAttribute('index'))

    let selectedIngredient = this.state.staples.filter(ingredient=> +click.target.getAttribute('index') === ingredient.id);

    console.log("selectedIngredient", selectedIngredient)
    
    let newList = this.state.selected;
    newList.push(selectedIngredient[0]);
    console.log("newList", newList)
    this.setState({
      selected:newList
    })
  }
  
  render(){
  return (
    <div>
      <header className="header">
        <h1>WHAT'S IN YOUR FRIDGE?</h1>
      </header>

      <main className="main-list">
        <section className="staples">
          <h3>Staple Ingredients:</h3>
          <StapleList staples={this.state.staples} add={this.addToSelected} />
        </section>

        <section className="additionals">
          <h3>Additional Ingredients:</h3>
            <input type="text"/>
        </section>

        <section className="">
          <h3>Selected Ingredients:</h3>
          <SelectedIngredients list={this.state.selected} />
        </section>
      </main>

    </div>
    );
  }
}

export default App;
