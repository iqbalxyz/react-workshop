import React from 'react';
import { Button } from '@todo-app/shared-components';
import { formatDate } from '@todo-app/shared-utils';

function App() {
  const handleClick = () => {
    alert('Button from shared package clicked!');
  };

  const today = new Date();

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Monorepo Demo App</h1>
      <p>This app demonstrates using shared packages in a Lerna monorepo.</p>

      <div style={{ marginTop: '20px' }}>
        <h3>Shared Component:</h3>
        <Button onClick={handleClick} variant="primary">
          Primary Button
        </Button>
        {' '}
        <Button onClick={handleClick} variant="secondary">
          Secondary Button
        </Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Shared Utility:</h3>
        <p>Today's date (formatted): <strong>{formatDate(today)}</strong></p>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h4>How this works:</h4>
        <ul>
          <li>Button component comes from <code>@todo-app/shared-components</code></li>
          <li>formatDate function comes from <code>@todo-app/shared-utils</code></li>
          <li>All packages are linked locally via Lerna</li>
          <li>Changes to shared packages reflect immediately</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
