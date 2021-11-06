import React, { useState, useRef } from 'react';
import dataJSON from '../data/users.json';
import dataItemsJSON from '../data/items.json';


function Add({ usersButtonClicked, itemsButtonClicked, newUserData, newItemsData, handleAddFormChange, handleAddFormSubmt }) {







    return (

        <div className="Add-form">

            {usersButtonClicked && <div className='create-smth'>
                <h2>Add a user</h2>
                <form className='add-form' onSubmit={(event) => handleAddFormSubmt(event, 'users')}>
                    <input
                        type="text"
                        placeholder='Enter a name'
                        name="Fname"
                        value={newUserData?.Fname ? newUserData?.Fname : ''}
                        onChange={(event) => handleAddFormChange(event, 'users')}
                        required="required"
                    />
                    <input
                        type="text"
                        placeholder='Enter a last name'
                        name="Lname"
                        required="required"
                        value={newUserData?.Lname ? newUserData?.Lname : ''}
                        onChange={(event) => handleAddFormChange(event, 'users')}
                    />

                    <button type="submit">
                        Add
                    </button>

                </form>
            </div>
            }


            {
                itemsButtonClicked &&
                <div>
                    <h2>Add an item</h2>
                    <form className='add-form' onSubmit={(event) => handleAddFormSubmt(event, 'items')}>
                        <input
                            type="text"
                            placeholder='Enter product'
                            name="product"
                            value={newItemsData?.product ? newItemsData?.product : ''}
                            onChange={(event) => handleAddFormChange(event, 'items')}
                            required="required"
                        />
                        <input
                            type="text"
                            placeholder='Enter price'
                            name="price"
                            required="required"
                            value={newItemsData?.price ? newItemsData?.price : ''}
                            onChange={(event) => handleAddFormChange(event, 'items')}
                        />

                        <button type="submit">
                            Add
                        </button>

                    </form>
                </div>

            }

        </div>
    );
}

export default Add;