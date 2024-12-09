This React component uses the `useEffect` hook incorrectly, leading to an infinite render loop.  The dependency array is missing, causing the effect to run on every render.  This means that `fetchUserData` is called repeatedly, causing an unnecessary load and potentially crashing the browser.

```javascript
import React, { useState, useEffect } from 'react';

function UserDisplay() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserData(data);
    };
    fetchUserData();
  });

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserDisplay;
```