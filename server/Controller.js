const ingredientsList = require('./Ingredients.json');
let list =[];

module.exports = {
    
  getIngredients: (req, res) => {
    //let foodArr = [];
    //foodArr.push(ingredientsList.ingredients.staples)
    //console.log("get ingredients foodArr:", foodArr);
    res.status(200).json(ingredientsList.ingredients)
  },

  getStaples: (req, res) => {
    res.status(200).json(ingredientsList.ingredients.staples)
  },

  getAdditional: (req, res) => {
    res.status(200).json(ingredientsList.ingredients.additional)
  },


  getOneIngredient: (req, res) => {
    const { id } = req.params;

    res.status(200).send(ingredientsList.ingredients.staples[id])
  },

  addToList: (req, res) => {
    let foodArr = ingredientsList.ingredients.additional;
    let newIngredient= ''

    newIngredient = req.body.newItem

    foodArr.push(newIngredient)
    console.log(foodArr)

    res.status(200).send(foodArr)
  },


  editStaplesIngredient: (req, res) => {
    const {id} = req.params;
    const {newName} = req.body;
    ingredientsList.ingredients.staples[id] = newName

    res.status(200).send(ingredientsList.ingredients.staples)
  },

  editAdditionalIngredient: (req, res) => {
    const {id} = req.params;
    const {newName} = req.body;
    ingredientsList.ingredients.additional[id] = newName

    res.status(200).send(ingredientsList.ingredients.additional)

    
  },

  
  removeFromStapleList: (req, res) => {
    const { index } = req.params;
    let { staples } = ingredientsList.ingredients
    
    staples.splice(index,1)
   
    res.status(200).send(staples)
    
  },
  
  removeFromAdditionalList: (req, res) => {
    const { index } = req.params;
    let { additional } = ingredientsList.ingredients
    
    additional.splice(index,1)
   
    res.status(200).send(additional)
    
  }

}