import React from 'react';


const List=(props)=>{

//the jsx can be returned in the react
  const renderedList=props.results.map((item)=>{
    return(
      <div key={item.pageid} className="ui segment">
        <h2><a href = {"https://en.wikipedia.org/curid=" + item.pageid}
           className="header"
           target="_blank"
           >{item.title}
         </a></h2>
        <p dangerouslySetInnerHTML  = {{__html:item.snippet }} ></p>

      </div>
    )
  });
  return renderedList;
}

export default List;
