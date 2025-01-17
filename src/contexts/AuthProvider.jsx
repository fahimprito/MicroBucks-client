import PropTypes from "prop-types";
import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
        name: "fahim",
        email: "fahim@email.com"
    });
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;