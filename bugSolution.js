The corrected component adds an empty dependency array `[]` to the `useEffect` hook, ensuring it runs only once after the initial render.

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
  }, []); // Empty dependency array

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
By adding the empty array, the effect is only executed once after the initial render, preventing the infinite loop.