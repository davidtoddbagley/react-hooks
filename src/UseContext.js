import React, { useContext } from 'react';
import { SharedContext } from './App';

import Button from 'react-bootstrap/Button';

const UseContext = () => {
  const context = useContext(SharedContext);

  return (
    <div>
      <Button>{context.useContextButton}</Button>
    </div>
  );
};

export default UseContext;
