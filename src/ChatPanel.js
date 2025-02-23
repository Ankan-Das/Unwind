// ChatPanel.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, IconButton, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Rnd } from 'react-rnd';

const ChatPanel = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the party!" },
    { id: 2, text: "Let's sync up and start the movie." }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg = { id: messages.length + 1, text: newMessage.trim() };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  // Inline styles for the Rnd container
  const rndStyle = {
    background: "rgba(30, 30, 30, 0.9)",
    border: "2px solid #00BCD4",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    zIndex: 100000000,
    pointerEvents: "auto",
    position: "fixed",
    touchAction: "none",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 14px",
    background: "linear-gradient(135deg, rgba(0,188,212,0.6), rgba(0,150,200,0.6))",
    borderBottom: "1px solid #00BCD4",
    cursor: "move",
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#FFFFFF",
  };

  const closeBtnStyle = {
    color: "#FFFFFF",
  };

  const messagesStyle = {
    flexGrow: 1,
    padding: "10px",
    overflowY: "auto",
    background: "transparent",
  };

  const inputAreaStyle = {
    display: "flex",
    gap: "8px",
    padding: "10px",
    borderTop: "1px solid #00BCD4",
    background: "rgba(30, 30, 30, 0.85)",
  };

  const textFieldStyle = {
    flexGrow: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "#FFFFFF",
  };

  const sendBtnStyle = {
    background: "linear-gradient(135deg, rgba(0,188,212,0.5), rgba(0,150,200,0.5))",
    border: "1px solid #00BCD4",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,188,212,0.3)",
    transition: "background 0.3s",
    padding: "8px 16px",
  };

  const sendBtnHoverStyle = {
    background: "linear-gradient(135deg, rgba(0,188,212,0.6), rgba(0,150,200,0.6))",
  };

  // Define the chat panel content to be portaled
  const chatContent = (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 350,
        height: 400,
      }}
      minWidth={250}
      minHeight={300}
      maxWidth={500}
      maxHeight={600}
      bounds="window"
      dragHandleClassName="chat-header"
      style={rndStyle}
    >
      <Box style={containerStyle}>
        {/* Chat Header */}
        <Box style={headerStyle} className="chat-header">
          <Typography style={titleStyle} className="chat-title">Chat</Typography>
          <IconButton size="small" onClick={onClose} style={closeBtnStyle}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        {/* Chat Messages */}
        <Box style={messagesStyle} className="chat-messages">
          <List>
            {messages.map((msg) => (
              <ListItem key={msg.id} divider>
                <ListItemText primary={msg.text} primaryTypographyProps={{ style: { color: "#FFFFFF" } }} />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Chat Input */}
        <Box style={inputAreaStyle} className="chat-input">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            style={textFieldStyle}
            InputProps={{
              style: { color: "#FFFFFF" },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            style={sendBtnStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, sendBtnHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, sendBtnStyle);
            }}
            className="chat-send-btn"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Rnd>
  );

  // Use React Portal to render the chat panel at the root of document.body
  return ReactDOM.createPortal(chatContent, document.body);
};

export default ChatPanel;
