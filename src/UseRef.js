import React, { useRef } from 'react';

const UseRef = ({ primary, secondary }) => {

  const divRef = useRef(null);

  return (
    <img
      onMouseOut={() => {
        divRef.current.src = primary;
      }}
      onMouseOver={() => {
        divRef.current.src = secondary;
      }}
      src={primary}
      ref={divRef}
      alt={primary}
    />
  );
}

export default UseRef;