import React from 'react';
import InputDisplay from '../../atoms/inputDisplay';

const DisplayWithLabel = ({ label, value, testId }) => {
  return (
    <div sx={{ display: 'flex',gap:'5px', alignItems: 'center', marginBottom: '2px' , margined:0}}>
      <strong>{label}:</strong>
      <InputDisplay value={value} data-testid={testId} />
    </div>
  );
};

export default DisplayWithLabel;
