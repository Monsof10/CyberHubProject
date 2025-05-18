import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import ChatBot from './ChatBot/ChatBot';

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
      <ChatBot />
    </BrowserRouter>
  );
}
