import React from 'react';




function Buttons({usersClickHandler, itemsClickHandler, categoriesClickHandler}) {


    return (
        <div className="buttons">
            <button onClick={() =>  usersClickHandler() } >
                Users
            </button>
            <button onClick={() =>  itemsClickHandler() }>
                Items
            </button>
            {/* <button onClick={() =>  categoriesClickHandler() }>
                Category
            </button> */}
            
        </div>
        
    )
}

export default Buttons;
