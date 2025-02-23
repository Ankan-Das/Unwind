// PartyUI.js
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import ChatPanel from './ChatPanel';
import './PartyUI.css'; // Optional additional styling for party UI

const PartyUI = () => {
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <>
      {/* Party overlay info */}
      <Box className="party-overlay">
        <Typography variant="h4" className="room-info">Room: ROOM123</Typography>
        <IconButton className="chat-toggle-button" onClick={() => setChatOpen(prev => !prev)}>
          <ChatIcon />
        </IconButton>
      </Box>
      {chatOpen && (console.log("Rendering ChatPanel"), <ChatPanel onClose={() => setChatOpen(false)} />)}
    </>
  );
};

export default PartyUI;
