import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };

        data.username = data.username.toLowerCase();

        try {
            const res = await axios.post("http://127.0.0.1:5100/user/login", data);

            if (res.data.status === 200) {
                localStorage.setItem("valid", true);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("id", res.data.id);
                navigate("/dashboard");
            } else {
                localStorage.setItem("valid", false);
                alert("Invalid credentials");
            }
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            id="username"
                            className="w-full h-12 pl-10 pr-3 text-base bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="password"
                            id="password"
                            className="w-full h-12 pl-10 pr-3 text-base bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-12 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4 text-gray-400">
                    <span>or </span>
                    <Link to="/signup" className="text-blue-400 hover:underline">Register Here!</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;
