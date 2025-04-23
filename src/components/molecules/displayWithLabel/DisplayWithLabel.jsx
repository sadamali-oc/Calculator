import React from 'react';
import InputDisplay from '../../atoms/inputDisplay/InputDisplay';

const DisplayWithLabel = ({ label, value, testId }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '1px' }}>
      <strong>{label}:</strong>
      <InputDisplay value={value} data-testid={testId} />
    </div>
  );
};

export default DisplayWithLabel;
