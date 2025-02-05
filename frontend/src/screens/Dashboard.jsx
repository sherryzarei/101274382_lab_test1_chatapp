import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
    const [groupList, setGroupList] = useState([]);
    const [userlist, setUserlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadGroups();
        loadUsers();
    }, []);

    const loadGroups = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:5100/group/groups");
            setGroupList(result.data);
        } catch (err) {
            console.error("Error loading groups:", err);
        }
    };

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:5100/user/users");
            setUserlist(result.data.data);
        } catch (err) {
            console.error("Error loading users:", err);
        }
    };

    const deleteGroup = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:5100/group/${id}`);
            loadGroups();
        } catch (error) {
            console.error("Error deleting group:", error);
        }
    };

    const addMembers = (id) => {
        navigate(`/chat/${id}`);
    };

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <div className="space-x-4">
                    <Link to="/group">
                        <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white">Add Group</button>
                    </Link>
                    <button onClick={logout} className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white">Logout</button>
                </div>
            </div>

            <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8 mt-10">
                {/* Users List */}
                <div className="w-full md:w-1/2 bg-gray-800 p-5 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Users</h2>
                    {userlist.length > 0 ? (
                        userlist.map((user) => (
                            <div key={user._id} className="bg-gray-700 p-3 mb-2 rounded-lg shadow-md">
                                <p><strong>Username:</strong> {user.username}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">No users available</p>
                    )}
                </div>

                {/* Groups List */}
                <div className="w-full md:w-1/2 bg-gray-800 p-5 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">Groups</h2>
                    {groupList.length > 0 ? (
                        groupList.map((group) => (
                            <div key={group._id} className="bg-gray-700 p-4 mb-3 rounded-lg shadow-md">
                                <p className="font-semibold">Group Name: {group.name}</p>
                                <p className="text-sm text-gray-400">Members: {group.members.length}</p>
                                <div className="mt-2 flex space-x-3">
                                    <button 
                                        onClick={() => addMembers(group._id)} 
                                        className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded-lg text-white"
                                    >
                                        Join
                                    </button>
                                    <button 
                                        onClick={() => deleteGroup(group._id)} 
                                        className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded-lg text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400">No groups available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
