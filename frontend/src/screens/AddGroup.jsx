import React, { useState, useEffect } from "react";
import { RxTextAlignLeft } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";

export default function AddGroup() {
  const [formData, setFormData] = useState({
    name: "",
    member: [],
  }); 
  const navigate = useNavigate();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: capitalizeFirstLetter(value) });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = localStorage.getItem("id");
    
    try {
      const newGp = await axios.post("http://127.0.0.1:5100/group/create", formData);
      console.log("nnnn",newGp);

    
      if(newGp.data._id) {
        const groupid = newGp.data._id;
  
        await axios.post(`http://127.0.0.1:5100/group/${groupid}/members`, {
          memberId: userid,
        });
  
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response.data.error);
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
        <Link to="/dashboard">
          <IoArrowBackOutline className="text-3xl text-white hover:text-gray-400 cursor-pointer" />
        </Link>
      </div>

      <div className="container mx-auto flex justify-center items-center min-h-screen">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Add Group</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <div className="relative flex items-center mt-1">
                <RxTextAlignLeft className="absolute left-3 text-gray-400 text-lg" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-10 pl-10 pr-3 text-base placeholder-gray-400 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter group name"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 px-6 py-2 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500 transition-all"
            >
              Add Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
