import React, { useState, useRef } from 'react';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';

function ReadOnly({user}) {

    const [usersButtonClicked,setUsersButtonClicked] = useState(false);
    const [itemsButtonClicked,setItemsButtonClicked] = useState(false);
    // const [categoryButtonClicked,setCategoryButtonClicked] = useState(false);
    const [usersList,setUsersList] = useState(dataJSON);
    const [itemsList,setItemsList] = useState(dataItemsJSON);

    const usersClick = () => {setUsersButtonClicked(true); 
        setItemsButtonClicked(false)};
    const itemsClick = () =>{setUsersButtonClicked(false); 
        setItemsButtonClicked(true)};
    // const categoryClick = () => setCategoryButtonClicked(true);

   
    const removeClick = (id,type) => {

        if(type === 'users') {
            const removedArr = [...usersList].filter(user => user.id !== id);
            setUsersList(removedArr);
        } else {

           const removedArr = [...itemsList].filter(items => items.id !== id);
           setItemsList(removedArr);
        }
                
       
    }

    const [editedValue, setEditedValue]=useState('');

    const editedValueSubmit = (id) => {
        const updatedData = usersList.map((item) => {
            if(item.id === id) {
                return {
                    ...item,
                    name:editedValue,
                }
            }else{
                return item
            }
        })
        
        setUsersList(updatedData)
    }

    const userValueChange = (event) => {
        setEditedValue(event.target.value)
    }

    
    
    const updateClick = (user) => {
        const updatedData = usersList.map((item) => {
            if(item.id === user.id) {
                return {
                ...item,
                editMode:true,
                }
            }else{
                return {
                    ...item,
                    editMode:false
                }
            }
        })

       
        
    }
    



    return (
        <tr key={user.id}>
           <td >{user.id}</td>
               <td>
                 {user.editMode === true ? <input onChange={userValueChange} 
                   value={(editedValue)}/> : user.name}
                </td>
                                    
                <td>
                  {user.editMode === true ? <input onChange={userValueChange} 
                    value={editedValue}/> : user.Lname}
                    </td>
                    <td>
                     <button id='delete-button' 
                       onClick={() => removeClick(user.id,'users')}>
                           Delete
                     </button>
                      <button id="btn-edit"
                      onClick={() => updateClick(user) }>
                          Edit
                     </button>
            </td>
        </tr>
    )
}

export default ReadOnly;