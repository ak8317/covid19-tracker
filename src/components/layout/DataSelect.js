import React, { useState, useContext } from 'react';
import DataContext from '../../context/dataContext';
import { NativeSelect } from '@material-ui/core';
import Spinner from './Spinner';
const DataSelect = () => {
  const dataContext = useContext(DataContext);

  const { statesData, loading, setCurrentState } = dataContext;
  const [state, setState] = useState('0');

  if (loading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setState(e.target.value);
    setCurrentState(e.target.value);
  };

  const clearBtn = () => {
    setState('0');
    setCurrentState('Total');
  };
  return (
    <div style={formStyle}>
      <NativeSelect name='state' value={state} id='state' onChange={onChange}>
        <option value='0' disabled>
          Select a State
        </option>
        {statesData.map((state, i) => (
          <option key={i} value={state.state}>
            {state.state}
          </option>
        ))}
      </NativeSelect>
      {state !== '0' && (
        <button
          className='btn btn-light'
          style={{ marginLeft: '1rem' }}
          onClick={clearBtn}
        >
          Clear
        </button>
      )}
    </div>
  );
};

const formStyle = {
  marginTop: '2rem',
};

export default DataSelect;
