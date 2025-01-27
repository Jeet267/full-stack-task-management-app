import React, { useContext } from 'react';
import { AppContext } from './context/AuthContext'; // Make sure this import is correct
import Login from './components/Login';
import Menu from './components/Menu';
import './App.css'

function App() {
  const { token } = useContext(AppContext);

  const LogoutButton = () => {
    const { logout } = useContext(AppContext);
  
    const handleLogout = () => {
      logout();
    };
  
    return (
      <button 
        onClick={handleLogout} 
        className="logout-button"
      >
        Logout
      </button>
    );
  };

  return (
    <div className="App">
      {token && <LogoutButton />}
      {!token ? <Login /> : <Menu />}
    </div>
  );
}

export default App;