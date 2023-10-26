import React from 'react';

const Color = ({color}) => {
    return (
        <div className='border border-secondary p-5' style={{ backgroundColor: color }}>
      </div>        
    );
};

export default Color;