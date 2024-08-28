import React, { useState, useEffect } from 'react';


function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUsers(json);
          setLoading(false);
        });
    }, []);
  
    return (
        <div>
            <h1 class="head">Fetch Api:</h1>
      <div class="list">

        <div>
            
        <h1>Users:</h1>
        {loading ? (
          <p>Loading...</p>
          
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
        </div>
      </div>
      </div>
    );
  }
  

export default App




