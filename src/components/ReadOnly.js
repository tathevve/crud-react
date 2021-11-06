import React, { useState, useRef } from 'react';


function ReadOnly({ usersButtonClicked, itemsButtonClicked, userDataChange, removeHandler, updatedUserDataSubmit, updateClick, editedValue, usersData, itemsData }) {

  return (
    <div className="pro">
      {usersButtonClicked &&
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Surname</th>

            </tr>

          </thead>
          <tbody>
            {usersData.length > 0 && usersData.map((item) => (
              <tr key={item.id}>
                <td >{item.id}</td>
                <td>
                  {item.editMode === true ? <input onChange={(event) => userDataChange(event, item)}
                    value={editedValue ? editedValue?.Fname : item.Fname} name='Fname' /> : item.Fname}
                </td>

                <td>
                  {item.editMode === true ? <input onChange={(event) => userDataChange(event, item)}
                    value={editedValue ? editedValue?.Lname : item.Lname} name='Lname' /> : item.Lname}
                </td>
                <td>
                  <button id='btn-delete'
                    onClick={() => removeHandler(item.id, 'users')}>
                    Delete
                  </button>
                  {item.editMode === true ? <button id="btn-save"
                    onClick={() => updatedUserDataSubmit(item.id, 'users')}>
                    Save Changes
                  </button> : <button id="btn-edit"
                    onClick={() => updateClick(item, 'users')}>
                    Edit
                  </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }

      {itemsButtonClicked &&
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemsData?.length > 0 && itemsData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.editMode === true ? <input onChange={(event) => userDataChange(event, item)}
                    value={editedValue ? editedValue?.product : item.product} name='product' /> : item.product}
                </td>

                <td>
                  {item.editMode === true ? <input onChange={(event) => userDataChange(event, item)}
                    value={editedValue ? editedValue?.price : item.price} name='price' /> : item.price}
                </td>

                <td>
                  <button id='btn-delete'
                    onClick={() => removeHandler(item.id, 'items')}>
                    Delete
                  </button>
                  {item.editMode === true ? <button id="btn-save"
                    onClick={() => updatedUserDataSubmit(item.id, 'items')}>
                    Save Changes
                  </button> : <button id="btn-edit"
                    onClick={() => updateClick(item, 'items')}>
                    Edit
                  </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

export default ReadOnly;

