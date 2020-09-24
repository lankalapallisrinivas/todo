import React from 'react';

const Todolist = (props) => {
    return (
       <ul className="list-group mt-3 mb-3">
           {
               props.items.map( (item, index) => {
                    return(
                    <li className="list-group-item" key={item.id}><span className="mr-2 badge badge-dark">{index+1}</span>{item.text} <span className="pull-right" onClick={() => props.onDelete(item)} style={{cursor:"pointer"}} title="Delete item"><i className="fa fa-trash text-danger"></i></span></li>
                    )
               })
           }
       </ul>
    )
}
export default Todolist;