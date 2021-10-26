import React, { useState, useRef } from 'react';
import Buttons from './components/Buttons.js';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';



function App() {

    const [usersButtonClicked,setUsersButtonClicked] = useState(false);
    const [itemsButtonClicked,setItemsButtonClicked] = useState(false);
    const [categoryButtonClicked,setCategoryButtonClicked] = useState(false);
    const [usersList,setUsersList] = useState(dataJSON);
    const [itemsList,setItemsList] = useState(dataItemsJSON);
   
   

    const usersClick = () => {setUsersButtonClicked(true); 
        setItemsButtonClicked(false)};
    const itemsClick = () =>{setUsersButtonClicked(false); 
        setItemsButtonClicked(true)};
    const categoryClick = () => setCategoryButtonClicked(true);

   
    const removeClick = (id,type) => {

        if(type === 'users') {
            const removedArr = [...usersList].filter(user => user.id !== id);
            setUsersList(removedArr);
        } else {

           const removedArr = [...itemsList].filter(items => items.id !== id);
           setItemsList(removedArr);
        }
                
       
    }
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });

      const [input, setInput] = useState(edit ? edit.value : '');
      const inputRef = useRef(null);

      const submitUpdate = value => {
        updateClick(edit.id, value);
        setEdit({
          id: null,
          value: ''
        });
      };
    
    //   if (edit.id) {
    //     return {edit={edit} onSubmit={submitUpdate} };
    //   }

    const handleChange = e => {
        <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='item-input edit'
        />
        setInput(e.target.value);
      };

    const updateClick = (prId, newValue) => {
        

        // if (!newValue.text || /^\s*$/.test(newValue.innerText)) {
        // return;
        // }

    
        setUsersList(prev => prev.map(item => (item.id === prId ? newValue : item)));
      };

    return (
        <div className="pro">
            <h1>Project</h1>
            <Buttons 
                usersClickHandler={usersClick} 
                itemsClickHandler={itemsClick}
                categoriesClickHandler={categoryClick} 
               
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
                                    <td>{user.id}</td>
                                    <td className='edit-button'>{user.name}</td>
                                    <td className='edit-button'>{user.Lname}</td>
                                    
                                    <td>
                                    <button id='delete-button' 
                                    onClick={() => removeClick(user.id,'users')}>
                                        Delete
                                    </button>
                                    <button 
                                     onClick={() => updateClick({ id: user.id, value: user.text })}>
                                     
          
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
                                            <td className='edit-button'>{items.product}</td>
                                            <td className='edit-button'>{items.price}</td>
                                           
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
                
            
        </div>
    );
}

export default App;



