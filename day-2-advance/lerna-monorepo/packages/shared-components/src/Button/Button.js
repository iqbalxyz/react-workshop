import React from 'react';

export function Button({ children, onClick, variant = 'primary' }) {
  const styles = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}
