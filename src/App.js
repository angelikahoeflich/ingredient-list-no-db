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
      newItemValue: '',
      selected: []
    }
    this.addToSelected = this.addToSelected.bind(this);
    this.newItemChange = this.newItemChange.bind(this);
    this.listenForEnter = this.listenForEnter.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

  newItemChange(keypress){
    if(keypress.code !== "Enter"){
      this.setState({
        newItemValue: keypress.target.value
      })
    }
  }

  listenForEnter(keypress){
    if (keypress.code === "Enter"){
      let newAdditionalItem = this.state.staples;

      let newIngredient = {
        id: this.state.staples.length+1,
        name: this.state.newItemValue
      }

      console.log("newIngredient", newIngredient);

      newAdditionalItem.push(newIngredient);

      Axios
      .post("http://localhost:4040/api/ingredients", newIngredient)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));


      this.setState({staples: newAdditionalItem})
    }
  }

  deleteItem(event){
    let oldStaples = this.state.staples;

    let newStaples = oldStaples.filter(
      (staple) => {
        return staple.id != event.target.getAttribute("index")
      }
    );

    this.setState({staples: newStaples})
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
          <input type="text" id="newItem" value={this.state.newItemValue} onChange={this.newItemChange} onKeyPress={this.listenForEnter}/>
          <StapleList staples={this.state.staples} add={this.addToSelected} deleteItem={this.deleteItem}/>
        </section>

        {/* <section className="additionals">
          <h3>Additional Ingredients:</h3>
            <input type="text" id="newItem" value={this.state.newItemValue} onChange={this.newItemChange} onKeyPress={this.listenForEnter}/>
            <Additional list={this.state.additional}/>

        </section> */}

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
