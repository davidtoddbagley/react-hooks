import React, { useEffect, useState } from 'react';
import './UseEffect.css'

const UseEffect = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState(['1']);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const sum = items.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      if (sum < 100) {
        setItems([...items, sum]);
      }
      setIsLoading(false);
    }, 1000);
    return () => {
      console.log(`useEffect cleanup timeout #${timeoutId}`);
      clearTimeout(timeoutId);
    }
  }, [items]);

  return isLoading ? ( <div>loading...</div> ) : (
    <div>{items.join(', ')}</div>
  );
};

export default UseEffect;