import React from 'react';
import './App.css';

import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseRef from './UseRef';
import UseState from './UseState';

const imgUrl1 = 'https://via.placeholder.com/150/007bff/ffffff';
const imgUrl2 = 'https://via.placeholder.com/150/b3b3b3/000099';

function App() {
  return (
    <div className="App">
      <p>
        <label>useState: increment onClick</label>
        <UseState></UseState>
        &nbsp;
        <UseState></UseState>
      </p>

      <hr></hr>
      <p>
        <label>useRef: image swap onMouseOver</label>
        <UseRef
          primary={imgUrl1}
          secondary={imgUrl2}
        />
        &nbsp;
        <UseRef
          primary={imgUrl2}
          secondary={imgUrl1}
        />
      </p>

      <hr></hr>
      <p>
        <label>useEffect: </label>
      </p>
      <UseEffect />

      <hr></hr>
      <p>
        <label>useContext: </label>
      </p>
      <UseContext />

      <hr></hr>
      <p>
        <label>useReducer: </label>
      </p>
      <UseReducer />

      <hr></hr>
      <p>
        <label>useCallback: </label>
      </p>
      <UseCallback />

      <hr></hr>
      <p>
        <label>useMemo: </label>
      </p>
      <UseMemo />
    </div>
  );
}

export default App;
