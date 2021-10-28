import React, { useState, useRef } from 'react';
import Buttons from './components/Buttons.js';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';
import Add from './Add.js';


// const updateClick = (e) => {
    //     e=e.target;
        
    //    if(e.innerText === 'Edit') {
    //        e.innerText = 'Save';
    //    } else {
    //        e.innerText = 'Edit';
    //    }

   
       
    // }  
    


function App() {

    const [usersButtonClicked,setUsersButtonClicked] = useState(false);
    const [itemsButtonClicked,setItemsButtonClicked] = useState(false);
    // const [categoryButtonClicked,setCategoryButtonClicked] = useState(false);
    const [usersList,setUsersList] = useState(dataJSON);
    const [itemsList,setItemsList] = useState(dataItemsJSON);
   
    const [newUser, setNewUser] = useState([]);
   

    const NewUser = newUser => {
        if (!newUser.text || /^\s*$/.test(newUser.text)) {
          return;
        }
    
        const newUsers = [newUser, ...newUser];
    
        setNewUser(newUsers);
        console.log(...newUser);
      };

   

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
        <div className="pro">
            <h1>Project</h1>
            <Buttons 
                usersClickHandler={usersClick} 
                itemsClickHandler={itemsClick}
                // categoriesClickHandler={categoryClick} 
               
            />
             
            {usersButtonClicked  && 
                <div   div className='table-container'>
                  <table>
                  <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            
                        </tr>
                  
                        </thead>
                        <tbody>
                        {usersList.map((user, index) => {
                            return(
                                <tr key={index}>
                                    <td >{user.id}</td>
                                    <td>
                                        {user.editMode === true ? <input onChange={userValueChange} 
                                        value={editedValueSubmit(editedValue)}/> : user.name}
                                    </td>
                                    
                                    <td>
                                        {user.editMode === true ? <input onChange={userValueChange} 
                                        value={editedValue}/> : user.Lname}
                                    </td>
                                    <td>
                                    <button id='delete-button' 
                                    onClick={() => removeClick(user.id,'users')}
                                    onSubmit={()=>editedValueSubmit(user.id)}>
                                        Delete
                                    </button>
                                    <button id="btn-edit"
                                     onClick={() => updateClick(user) }>
                                        Edit
                                    </button>
                                    </td>
                                </tr>
                            )
                        })}
                  </tbody>
                    </table>
                </div>


            }

            {itemsButtonClicked && 
                        
                        
                        <div   div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {itemsList.map((items, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{items.id}</td>
                                            <td>
                                                {items.editMode === true ? <input onChange={userValueChange} 
                                                value={editedValue}/> : items.product}
                                            </td>
                                    
                                             <td>
                                                {items.editMode === true ? <input onChange={userValueChange} 
                                                value={editedValue}/> : items.price}
                                            </td>
                                           
                                            <td>
                                                <button id='delete-button' onClick={() => removeClick(items.id,'items')}>
                                                    Delete
                                                </button>
                                                <button 
                                                 onClick={() => updateClick({ id: items.id, value: items.text })}>
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>


            }
                
            <div className='app-content'>
                <div className='create-smth'>
                    <Add onSubmit={NewUser} />
                </div>
                
            </div>
        </div>
    );
}

export default App;



