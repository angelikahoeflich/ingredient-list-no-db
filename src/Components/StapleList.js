import React from 'react';


function StapleList(props) {
  console.log("Props from StapleList WTF!!!", props)
  let listItems = props.staples.map( 
    (item, index) => {
      return(
        <div key={item.id}>
          <span onClick={props.add} index={item.id}>
            • {item.name} 
          </span>
          <strong onClick={props.deleteItem} index={item.id}>
            &nbsp;x
          </strong>
        </div> )
    }
  )

  return(<ul>{listItems}</ul>);
}

export default StapleList;