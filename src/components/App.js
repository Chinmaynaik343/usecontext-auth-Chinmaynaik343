
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function Auth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h2>Authentication</h2>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(e) => setIsAuthenticated(e.target.checked)}
        />
        I am not a robot
      </label>

      <p>
        {isAuthenticated
          ? "You are authenticated"
          : "You are not authenticated"}
      </p>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
