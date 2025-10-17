import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

    // If we have token, consider user logged in
    useEffect(() => {
        if (accessToken) {
            setUser({}); // could decode token if needed
        }
    }, [accessToken]);
    // REGISTER
    const register = async (username, email, password, firstname, lastname) => {
        const response = await fetch("http://154.74.144.25:8080/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });
        // const response = await axios.post("http://154.74.144.25:8080/api/auth/register", {
        //     username, email, password, firstname, lastname
        // });
        const resData = response.data;
        console.log(resData);

        if (!response.ok) throw new Error("Registration failed");
        return await response.text();
    };

    // LOGIN
    const login = async (email, password) => {

        const response = await fetch("http://154.74.144.25:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        // const response = await axios.post("http://154.74.144.25:8080/api/auth/login", {
        //      email, password
        // });
        const resData = response.data;
        console.log(resData);

        if (!response.ok) throw new Error("Invalid credentials");

        localStorage.setItem("accessToken", resData.accessToken);
        localStorage.setItem("refreshToken", resData.refreshToken);

        setAccessToken(resData.accessToken);
        setRefreshToken(resData.refreshToken);

        setUser({ email });
    };

    // LOGOUT
    const logout = async () => {
        const refresh = localStorage.getItem("refreshToken");

        await fetch("http://localhost:8080/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken: refresh }),
        });

        localStorage.clear();
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
    };

    // PROTECTED FETCH WRAPPER
    const authFetch = async (url, options = {}) => {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        // If unauthorized, try to refresh token
        if (res.status === 401) {
            const newAccess = await refreshAccessToken();
            if (newAccess) {
                return fetch(url, {
                    ...options,
                    headers: {
                        ...options.headers,
                        Authorization: `Bearer ${newAccess}`,
                        "Content-Type": "application/json",
                    },
                });
            }
        }
        return res;
    };

    // REFRESH TOKEN
    const refreshAccessToken = async () => {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) return null;

        const res = await fetch("http://localhost:8080/api/auth/refresh", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken: refresh }),
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem("accessToken", data.accessToken);
            setAccessToken(data.accessToken);
            return data.accessToken;
        } else {
            logout();
            return null;
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, register, login, logout, authFetch, accessToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};