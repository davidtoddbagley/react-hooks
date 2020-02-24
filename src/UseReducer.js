import React from 'react';
import Button from 'react-bootstrap/Button';

const UseReducer = (props) => {
  return (
    <div>
      {props.isCpp ? 'C++' : ''}
      {props.isCpp && props.techList ? ', ' : ''}
      {props.techList.join(', ')} (child)
      <p></p>
      <input
        onChange={props.handleChange}
        placeholder="add a new tech" 
        />
      <p></p>
      <Button onClick={props.saveChange}>
        Save
      </Button>
      <p></p>    
      <input
        type="checkbox"
        onClick={props.toggle}>
      </input>&nbsp;C++

    </div>
  );
};

export default UseReducer;
