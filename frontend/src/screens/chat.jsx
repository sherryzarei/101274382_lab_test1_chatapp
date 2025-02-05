import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";
import { ArrowLeft } from "lucide-react";
import moment from "moment";

export default function Chat() {
  const { groupId } = useParams();
  const backend = "http://127.0.0.1:5100";
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [typing, setTyping] = useState("");
  const [groupData, setGroupData] = useState({});
  const socket = useRef(null);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("username");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      socket.current = io(backend, {
        auth: { token },
      });

      const fetchData = async () => {
        try {
          const response = await axios.get(`${backend}/group/${groupId}/messages`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.status === 200) {
            setMessages(response.data.map((msg) => ({ 
              message: msg.message, 
              username: msg.sender.username, 
              time: moment(msg.createdAt).format("hh:mm A") 
            })));
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();

      socket.current.on("message", (newMessage) => {
        newMessage.time = moment(newMessage.createdAt).format("hh:mm A");
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
      socket.current.on("type", (user) => setTyping(`${user} is typing...`));
      socket.current.on("stopTyping", () => setTyping(""));

      return () => socket.current.disconnect();
    }
  }, [groupId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const timestamp = moment().format("hh:mm A");
      socket.current.emit("chatMessage", { message: newMessage, sender: currentUser, group: groupId });
      setMessages((prevMessages) => [...prevMessages, { message: newMessage, username: currentUser, time: timestamp }]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-5 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-1">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-white">Group Chat</h1>
          <Link to="/dashboard" className="text-red-400 hover:underline">Leave</Link>
        </div>
        {typing && <div className="text-sm text-gray-300 mb-2">{typing}</div>}
        <div className="overflow-y-auto max-h-[500px] space-y-3 p-2 bg-gray-700 rounded-lg">
          {loading ? (
            <div className="text-gray-400 text-center">Loading messages...</div>
          ) : messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.username === currentUser ? "justify-end" : "justify-start"}`}
              >
                <div className={`p-3 rounded-lg max-w-xs break-words ${msg.username === currentUser ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}>
                  {msg.username !== currentUser && <div className="text-xs font-semibold text-gray-700">{msg.username}</div>}
                  <div className="text-sm">{msg.message}</div>
                  <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center">No messages yet</div>
          )}
        </div>
        <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 rounded-lg border-none focus:outline-none text-black"
            placeholder="Type a message..."
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
}
