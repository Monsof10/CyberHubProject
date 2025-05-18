import React from 'react';
import ChatBotPortal from '../ChatBot/ChatBotPortal';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <ChatBotPortal />
    </>
  );
};

export default Layout;
