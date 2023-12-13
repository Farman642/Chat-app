import React, { useState } from 'react';
import './chat.css'

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState(null);

  const sendMessage = () => {
    const newMessageObj = {
      text: newMessage,
      image: image,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="chat-app-container">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text && <p>{message.text}</p>}
            {message.image && <img src={message.image} alt="Shared" />}
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
