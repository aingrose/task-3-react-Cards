
import React from 'react';

function Box() {
  return (
    <div
      className='container-fluid text-white'
      style={{
        padding: '90px',
        backgroundColor: '#FFC074',
        backgroundImage: 'radial-gradient(at 47% 33%, hsl(12.00, 90%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%)',
      }}
    >
      <h1 className='box-textt' style={{ fontSize: '60px', fontWeight: 'bold' }}>Exploring Global Cuisines</h1>
      <p className="text-white-50" style={{ fontSize: '20px' }}>Perfect Pairings for Food and Drinks</p>
    </div>
  );
}

export default Box;
