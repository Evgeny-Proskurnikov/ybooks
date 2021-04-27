import React from 'react';

function Spinner({ spinnerType }) {
  return (
    <div className={`spinner ${spinnerType}`}/>
  )
}

export default Spinner;
