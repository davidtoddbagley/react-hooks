import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const UseState = () => {
  const [count, setCount] = useState(0); 

  const countAdd = () => {
    setCount(count + 1);
  };  

  return (
    <Button onClick={countAdd}>{count}</Button>
  );
};

export default UseState;