import React from 'react';

function SelectedIngredients(props) {
  console.log('Selected props.list WTF!!!!', props.list)
  
  let selected = props.list.map((ingredient) => {
      return (
        <li key={ingredient.id}>{ingredient.name}</li>
      )
    })

  return <ul>{selected}</ul>

}

export default SelectedIngredients;