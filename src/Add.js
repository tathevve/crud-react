import React, { useState, useRef } from 'react';

function Add(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    // const handleChange = e => {
    //     setInput(e.target.value);
    //   };

    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };

    return (
        <form onSubmit={handleSubmit} className='add-form'>
          <input
            placeholder='Add name'
            // value={input}
            // onChange={handleChange}
            name='text'
            className='add-input'
            ref={inputRef}
          />
          <input
            placeholder='Add last name'
            // value={input}
            // onChange={handleChange}
            name='text'
            className='add-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='add-button'>
            Add
          </button>
        
    </form>
  );
}

export default Add;
