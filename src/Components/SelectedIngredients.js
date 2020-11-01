import React from 'react';

function SelectedIngredients(props) {
  console.log('Selected props.list WTF!!!!', props.list)
  
  let selected = props.list.map((ingredient) => {
      return (
        
      <li className="selected-ingredients" key={ingredient.id}>{ingredient.name}<input type="text"/><button onClick={props.editItem}>✎</button></li>
      
      )
    })

  return <ul>{selected}</ul>

}

export default SelectedIngredients;