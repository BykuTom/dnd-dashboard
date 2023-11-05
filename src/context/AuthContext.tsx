import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Interface for Auth State which is supposed to provide user object and
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT" | "REGISTER";
  payload?: {
    user: User;
  };
}
const initialState = {
  user: null,
  isAuthenticated: false,
};

const AuthContext = createContext<{
  authState: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  authState: initialState,
  dispatch: () => {},
});

// Auth reducer:

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload?.user || null,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return initialState;
    case "REGISTER":
      console.log("register api fires here");
      return state;
    default:
      return state;
  }
};
// Interface for Auth Provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
