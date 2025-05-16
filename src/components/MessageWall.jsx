import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MessageWall = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.length > 0 && newMessage.length <= 100) {
      setMessages([...messages, { text: newMessage, id: Date.now() }]);
      setNewMessage("");
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-600">Message Wall</h2>
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Drop a note (100 chars max)"
          className="w-full p-2 rounded border border-purple-500"
          maxLength={100}
        />
        <button onClick={handleSubmit} className="mt-2 bg-purple-500 text-white p-2 rounded">
          Post
        </button>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            className="bg-yellow-200 p-4 rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <p>{msg.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MessageWall;
