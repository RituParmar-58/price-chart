import React from 'react';

const Duration = () => {
  return (
    <div className="duration">
      <button>1d</button>
      <button className="active">1w</button>
      <button>1m</button>
      <button>6m</button>
      <button>1y</button>
      <button>max</button>
    </div>
  );
};

export default Duration;
