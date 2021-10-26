import React from 'react';
import Buttons from './Buttons';

function Clicked() {

    const usersClick = () => console.log("users");
    const itemsClick = () => console.log("items");
    const categoryClick = () => console.log("category");
    
    return (
        <div>
        
            <Buttons usersClickHandler={usersClick} 
            itemsClickHandler={itemsClick}
             categoriesClickHandler={categoryClick} />
        
        </div>
    )
}

export default Clicked;