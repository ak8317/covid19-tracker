import React, { useState, useContext } from 'react';
import DataContext from '../../context/dataContext';

const DataSelect = () => {
  const dataContext = useContext(DataContext);

  const { statesData, setCurrentState } = dataContext;
  const [state, setState] = useState('0');

  const onChange = (e) => {
    setState(e.target.value);
    setCurrentState(e.target.value);
  };

  const clearBtn = () => {
    setState('0');
    setCurrentState('Total');
  };
  return (
    <div>
      <select
        className='form-select mt-10 block w-full border p-3 rounded'
        name='state'
        value={state}
        id='state'
        onChange={onChange}
      >
        <option value='0' disabled>
          Select a State
        </option>
        {statesData.map((state, i) => (
          <option key={i} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>
      {state !== '0' && (
        <button
          className='bg-blue-500 rounded p-3 mt-10 focus:outline-none hover:bg-blue-800'
          style={{ marginLeft: '1rem' }}
          onClick={clearBtn}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default DataSelect;
