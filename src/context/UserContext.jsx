import { createContext, useContext, useState } from "react";
import { ClientApi } from "../service/Api/Client/ClientApi";

export const UserStateContext = createContext({
  user: {},
  authenticated: false,
  setUser: () => {},
  logout: () => {},
  login: (email, password) => {},
  registerUser: (formData) => {}, 
  setAuthenticated: () => {},
});

export default function UserContext({ children }) {
  const [user, setUser] = useState({ name: "" });
  const [authenticated, setAuthenticated] = useState(
    "false" === window.localStorage.getItem("AUTHENTICATED")
  );

  const login = async (email, password) => {
    await ClientApi.getCsrfToken();
    setUser({ name: "" });
    return ClientApi.login(email, password);
  };

  const registerUser = async (formData) => { 
    await ClientApi.getCsrfToken();
    setUser({ name: formData.get('name') });
    return ClientApi.registerUser(formData);
  };

  const logout = () => {
    setAuthenticated(false);
    setUser({});
  };

  const setAuth = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
    window.localStorage.setItem("AUTHENTICATED", isAuthenticated);
  };

  return (
    <div>
      <UserStateContext.Provider
        value={{
          user,
          login,
          registerUser,
          authenticated,
          setAuthenticated: setAuth,
          setUser,
          logout,
        }}
      >
        {children}
      </UserStateContext.Provider>
    </div>
  );
}

export const useUserContext = () => useContext(UserStateContext);
