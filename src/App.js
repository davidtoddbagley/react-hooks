import React, { useReducer, useState } from 'react';
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

export const SharedContext = React.createContext();

function App() {

  // useContext demo: Use Context Button Text
  const [useContextButtonText, setUseContextButtonText] = useState('Use Context Button Text');
  const sharedContextObject = {
    useContextButton: useContextButtonText
  };
  const handleSharedContextButtonTextChange = (event) => {
    setUseContextButtonText(event.target.value);
  };

  // useReducer demo
  let useReducerCpp = false;
  let useReducerTech = '';
  const techReducer = (state, action) => {
    switch (action.type) {
      case 'setCppTrue' :
        useReducerCpp = true;
        return action.data;
      case 'setCppFalse' :
        useReducerCpp = false;  
        return action.data;
      case 'setTechList' :
        return action.data;
      default:
        return state;
    }
  };
  const [techList, dispatch] = useReducer(techReducer, ['javascript', 'php']);
  const useReducerHandleChange = (event) => {
    useReducerTech = event.target.value;
  };
  const useReducerSaveChange = () => {
    if (!!useReducerTech) {
      dispatch({
        type: 'setTechList',
        data: [...techList, useReducerTech]
      });
    }
    useReducerTech = '';
  };
  const useReducerToggle = (event) => {
    dispatch({ 
      data: [...techList],
      type: !!event.target.checked ? 'setCppTrue' : 'setCppFalse'
    });
  }

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
        <label>useEffect: managing setTimeout calls and cleanups</label>
      </p>
      <UseEffect />

      <hr></hr>
      <p>
        <label>useContext: </label>
      </p>
      <SharedContext.Provider value={sharedContextObject}>
        <input
          value={sharedContextObject.useContextButton}
          onChange={handleSharedContextButtonTextChange}
          />
        <p></p>
        <UseContext />
      </SharedContext.Provider>


      <hr></hr>
      <p>
        <label>useReducer: single dispatch supporting multiple use cases</label>
      </p>
      {techList.join(', ')} (parent)
      <p></p>
      <UseReducer
        handleChange={useReducerHandleChange}
        isCpp={useReducerCpp}
        saveChange={useReducerSaveChange}
        toggle={useReducerToggle}
        techList={techList}
        />
    </div>
  );
}

export default App;
