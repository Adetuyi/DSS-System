import jwtDecode from 'jwt-decode';
import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [authTokens, setAuthTokens] = useState(JSON.parse(localStorage.getItem('authTokens')) || null);
	const [user, setUser] = useState(authTokens?.access ? jwtDecode(authTokens?.access) : null);

	return <AuthContext.Provider value={{ authTokens, setAuthTokens, user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
