import React, { useState } from 'react';
import Buttons from './components/Buttons.js';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';
import Add from './components/Add.js';
import ReadOnly from './components/ReadOnly.js';


function App() {

    const [usersButtonClicked, setUsersButtonClicked] = useState(false);
    const [itemsButtonClicked, setItemsButtonClicked] = useState(false);
    // const [categoryButtonClicked,setCategoryButtonClicked] = useState(false);
    const [usersList, setUsersList] = useState(dataJSON);
    const [itemsList, setItemsList] = useState(dataItemsJSON);

    const [editedValue, setEditedValue] = useState(null);

    const [newUserData, setNewUserData] = useState(null);
    const [newItemsData, setnewItemsData] = useState(null);

    const usersClick = () => {
        setUsersButtonClicked(true);
        setItemsButtonClicked(false)
    };

    const itemsClick = () => {
        setUsersButtonClicked(false);
        setItemsButtonClicked(true)
    };



    const removeHandler = (id, type) => {

        if (type === 'users') {
            const removedArr = [...usersList].filter(user => user.id !== id);
            setUsersList(removedArr);
        } else {

            const removedArr = [...itemsList].filter(items => items.id !== id);
            setItemsList(removedArr);
        }


    }


    const updatedUserDataSubmit = (id, type) => {
        if (type === 'users') {
            const updatedData = usersList.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        ...editedValue,
                        editMode: false
                    }
                } else {
                    return {
                        ...item,
                        editMode: false
                    }
                }
            })
            setUsersList(updatedData)
        }
        else {
            const updatedData = itemsList.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        ...editedValue,
                        editMode: false
                    }
                } else {
                    return {
                        ...item,
                        editMode: false
                    }
                }
            })
            setItemsList(updatedData)
        }

        setEditedValue(null);
    }


    const userDataChange = (event, user) => {
        setEditedValue({ ...editedValue, [event.target.name]: event.target.value })

    }



    const updateClick = (user, type) => {

        if (type === 'users') {
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
        else {
            const updatedData = itemsList.map((item) => {
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
            setItemsList(updatedData);
        }


    }

    const handleAddFormChange = (event, type) => {

        if (type === 'users') {
            const newData = {
                id: usersList[usersList.length - 1].id + 1,
                [event.target.name]: event.target.value
            }

            setNewUserData({ ...newUserData, ...newData });
        }
        else {
            const newData = {
                id: itemsList[itemsList.length - 1].id + 1,
                [event.target.name]: event.target.value
            }

            setnewItemsData({ ...newItemsData, ...newData });
        }
    };


    const handleAddFormSubmt = (event, type) => {


        if (type === 'users') {
            event.preventDefault();
            setUsersList([...usersList, newUserData])
            setNewUserData(null);
        }
        else {
            event.preventDefault();
            setItemsList([...itemsList, newItemsData])
            setnewItemsData(null);
        }

    }


    return (
        <div className="pro">
            <h1>Project</h1>
            <Buttons
                usersClickHandler={usersClick}
                itemsClickHandler={itemsClick}
            // categoriesClickHandler={categoryClick} 
            />
            <div div className='users-container'>
                <ReadOnly
                    userDataChange={userDataChange}
                    removeHandler={removeHandler}
                    updatedUserDataSubmit={updatedUserDataSubmit}
                    updateClick={updateClick}
                    usersData={usersList}
                    itemsData={itemsList}
                    usersButtonClicked={usersButtonClicked}
                    itemsButtonClicked={itemsButtonClicked}
                    editedValue={editedValue}
                />

                <div className='user-content'>
                    <Add
                        usersButtonClicked={usersButtonClicked}
                        itemsButtonClicked={itemsButtonClicked}
                        newItemsData={newItemsData}
                        newUserData={newUserData}
                        handleAddFormSubmt={handleAddFormSubmt}
                        handleAddFormChange={handleAddFormChange}

                    />
                </div>
            </div>
        </div>
    );
};
export default App;