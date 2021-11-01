import React, { useState } from 'react';
import Buttons from './components/Buttons.js';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';
import Add from './Add.js';
import ReadOnly from './ReadOnly.js';


// const updateClick = (e) => {
//     e=e.target;

//    if(e.innerText === 'Edit') {
//        e.innerText = 'Save';
//    } else {
//        e.innerText = 'Edit';
//    }



// }  



function App() {

    const [usersButtonClicked, setUsersButtonClicked] = useState(false);
    const [itemsButtonClicked, setItemsButtonClicked] = useState(false);
    // const [categoryButtonClicked,setCategoryButtonClicked] = useState(false);
    const [usersList, setUsersList] = useState(dataJSON);
    const [editedValue, setEditedValue] = useState(null);
    const [itemsList, setItemsList] = useState(dataItemsJSON);
    const [newUserData, setNewUserData] = useState(null);
    const [contacts, setNewContacts] = useState(dataJSON);

    const usersClick = () => {
        setUsersButtonClicked(true);
        setItemsButtonClicked(false)
    };



    const itemsClick = () => {
        setUsersButtonClicked(false);
        setItemsButtonClicked(true)
    };

    const removeClick = (id, type) => {

        if (type === 'users') {
            const removedArr = [...usersList].filter(user => user.id !== id);
            setUsersList(removedArr);
        } else {

            const removedArr = [...itemsList].filter(items => items.id !== id);
            setItemsList(removedArr);
        }


    }


    const updatedUserDataSubmit = (id) => {
        const updatedData = usersList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    ...editedValue,
                    editMode:false
                }
            } else {
                return {
                    ...item,
                    editMode:false
                }
            }
        })

        setUsersList(updatedData)
        setEditedValue(null);
    }
    

    const userDataChange = (event, user) => {
        setEditedValue({ ...editedValue, [event.target.name]: event.target.value })

    }



    const updateClick = (user) => {
        const updatedData = usersList.map((item) => {
            if (item.id === user.id) {
                return {
                    ...item,
                    editMode: true,
                }
            } else {
                return {
                    ...item,
                    editMode: false
                }
            }
        })
        setUsersList(updatedData);
    }

    const handleAddFormChange = (event) => {
        const newData = {
            id: usersList[usersList.length - 1].id + 1,
            [event.target.name]: event.target.value
        }

        setNewUserData({ ...newUserData, ...newData })

    };


    const handleAddFormSubmt = (event) => {
        event.preventDefault();

        setUsersList([...usersList, newUserData])
        setNewUserData(null);
    }


    return (
        <div className="pro">
            <h1>Project</h1>
            <Buttons
                usersClickHandler={usersClick}
                itemsClickHandler={itemsClick}
            // categoriesClickHandler={categoryClick} 

            />

            {usersButtonClicked &&
                <div div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Surname</th>

                            </tr>

                        </thead>
                        <tbody>
                            {usersList.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td >{user.id}</td>
                                        <td>
                                            {user.editMode === true ? <input onChange={(event) => userDataChange(event, user)}
                                                value={editedValue ? editedValue?.Fname : user.Fname} name='Fname' /> : user.Fname}
                                        </td>

                                        <td>
                                            {user.editMode === true ? <input onChange={(event) => userDataChange(event, user)}
                                                value={editedValue ?  editedValue?.Lname : user.Lname} name='Lname' /> : user.Lname}
                                        </td>
                                        <td>
                                            <button id='delete-button'
                                                onClick={() => removeClick(user.id, 'users')}>
                                                Delete
                                            </button>
                                            {user.editMode === true ? <button id="btn-save"
                                                onClick={() => updatedUserDataSubmit(user.id)}>
                                                Save Changes
                                            </button> : <button id="btn-edit"
                                                onClick={() => updateClick(user)}>
                                                Edit
                                            </button>}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>


            }

            {/* {itemsButtonClicked && 
                        
                        
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
                                                 onClick={() => updateClick(items)}>
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>


            }   */}

            <div className='app-content'>
                <div className='create-smth'>
                    <h2>Add a user</h2>
                    <form className='add-form' onSubmit={handleAddFormSubmt}>
                        <input
                            type="text"
                            placeholder='Enter a name'
                            name="Fname"
                            value={newUserData?.Fname ? newUserData?.Fname : ''}
                            onChange={handleAddFormChange}
                            required="required"
                        />
                        <input
                            type="text"
                            placeholder='Enter a last name'
                            name="Lname"
                            required="required"
                            value={newUserData?.Lname ? newUserData?.Lname : ''}
                            onChange={handleAddFormChange}
                        />

                        <button type="submit">
                            Add
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};
export default App;