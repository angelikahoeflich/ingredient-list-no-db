import React from 'react';


function StapleList(props) {
  let listItems = props.staples.map( 
    (item, index) => {
      return(
        <li onClick={props.add} key={item.id} index={item.id}>
          {item.name}
        </li>)
    }
  )

  return(<ul>{listItems}</ul>);
}

export default StapleList;