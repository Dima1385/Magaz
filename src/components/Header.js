import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header">
      <h1>Minimalist Store</h1>
      {user ? (
        <div>
          <span>Welcome, {user}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      
    </header>
  );
};

export default Header;