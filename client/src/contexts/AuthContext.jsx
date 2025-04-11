import { createContext, useContext, useState } from "react";

// defines a context to share auth state (like isAuthenticated) across the app without prop drilling
const AuthContext = createContext();

// children are the components you are wrapping inside the <AuthProvider>
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // get user from local storage
        const storedUser = localStorage.getItem('user');
        // if user is in local storage, return it
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // set user on local storage
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // remove user from local storage
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // AuthContext.Provider makes the user, login(), and logout() available to all child components via the context
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook to access the AuthContext
export const useAuth = () => {
    // get context value from AuthContext
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    // return the context value (user, login(), logout()...)
    return context;
};
