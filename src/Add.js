import React, { useState, useRef } from 'react';
import dataJSON from './data/users.json';
import dataItemsJSON from './data/items.json';

function Add() {

    const [contacts, setNewContacts] = useState(dataJSON);
    const [addFormData,setAddFormData] = useState({
      id: '',
      name: '',
      Lname: '',

    })

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormdata = { ...addFormData};
      newFormdata[fieldName] = fieldValue;

      setAddFormData(newFormdata);
    };


    const handleAddFormSubmt = (event) => {
      event.preventDefault();

      const newContact = {
        id: addFormData.id,
        name: addFormData.name,
        Lname: addFormData.Lname
      };

      const  newContacts = [...contacts, newContact];
      setNewContacts(newContacts);
    }

    

    return (
        <div className='app-content'>
            
        <h2>Add a user</h2>
        <form className='add-form' onSubmit={handleAddFormSubmt}>
        <input 
            type="text"
            placeholder='Enter a name'
            name="name"
            onChange = {handleAddFormChange}
            required="required"
        />
        <input
            type="text"
            placeholder='Enter a last name'
            name="lastName"
            required="required"
            onChange = {handleAddFormChange}
        />

        <button type="submit">
            Add
        </button>
        
    </form>
    </div>
      
  );
}

export default Add;