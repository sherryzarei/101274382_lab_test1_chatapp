import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function Register() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [con_password, setCon_password] = useState("");

    const formData = {
        firstName: first_name,
        lastName: last_name,
        username,
        email,
        password,
        con_password,
    };
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
        const { password, con_password } = formData;
        if (password === con_password) {
            const res = await axios.post(
                "http://127.0.0.1:5100/user/signup",
                formData
            );

            if (res.data.status === 201) {
                localStorage.setItem("valid", true);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("id", res.data.id);
                alert("Registration Successful");
                navigate("/dashboard");
            } else {
                alert("Registration Failed");
            }
        } else {
            alert("Password and Confirm Password must be same");
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleRegistration} className="flex flex-col gap-4">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="email"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="password"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="password"
                            className="w-full h-12 pl-10 pr-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm Password"
                            onChange={(e) => setCon_password(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="h-12 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-4 text-gray-400">
                    <span>Already have an account? </span>
                    <Link to="/" className="text-blue-400 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
}