import React from 'react';

function SelectedIngredients(props){
  console.log('wtf', props)
  console.log('wtf-start')

  
  let selected;

  if (props.list.length > 0) {
    selected = props.list.map((ingredient) => {
      return (
        <li key={ingredient.id}>{ingredient.name}</li>
      )
    })
  }
  console.log('wtf-end')

  return <ul>{selected}</ul>

}

export default SelectedIngredients;