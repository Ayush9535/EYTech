import React, { useState } from 'react';
import { 
  MessageCircle, Search, Phone, Video, Plus, 
  MoreVertical, Paperclip, Send, User 
} from 'lucide-react';

const messagesData = [
  {
    id: 1,
    name: 'John Smith',
    lastMessage: 'Can we schedule a follow-up consultation?',
    timestamp: '2:45 PM',
    unread: 2,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    lastMessage: 'I have some questions about my recent test results.',
    timestamp: '1:22 PM',
    unread: 1,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Michael Wong',
    lastMessage: 'Thank you for your help last week.',
    timestamp: '10:15 AM',
    unread: 0,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Michael Wong',
    lastMessage: 'Thank you for your help last week.',
    timestamp: '10:15 AM',
    unread: 0,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Michael Wong',
    lastMessage: 'Thank you for your help last week.',
    timestamp: '10:15 AM',
    unread: 0,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Michael Wong',
    lastMessage: 'Thank you for your help last week.',
    timestamp: '10:15 AM',
    unread: 0,
    avatar: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Michael Wong',
    lastMessage: 'Thank you for your help last week.',
    timestamp: '10:15 AM',
    unread: 0,
    avatar: '/api/placeholder/40/40'
  }
];

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(messagesData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const filteredMessages = messagesData.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput('');
    }
  };

  return (
    <div className="flex h-[78vh] bg-gray-50">
      <div className="w-80 bg-white border-r border-gray-200 p-4 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-600">Messages</h2>
          <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full">
            <Plus />
          </button>
        </div>

        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search conversations" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200"
          />
          <Search className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="space-y-2">
          {filteredMessages.map(message => (
            <button 
              key={message.id} 
              onClick={() => setSelectedChat(message)}
              className={`w-full flex items-center p-3 rounded-lg hover:bg-blue-50 text-left ${
                selectedChat?.id === message.id ? 'bg-blue-100' : ''
              }`}
            >
              <img 
                src={message.avatar} 
                alt={message.name} 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between">
                  <span className="font-semibold">{message.name}</span>
                  <span className="text-sm text-gray-500">{message.timestamp}</span>
                </div>
                <p className="w-full text-sm text-gray-600 text-ellipsis">
                  {message.lastMessage}
                </p>
              </div>
              {message.unread > 0 && (
                <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                  {message.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-grow flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <img 
                  src={selectedChat.avatar} 
                  alt={selectedChat.name} 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{selectedChat.name}</h3>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <Phone className="text-blue-600" />
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <Video className="text-blue-600" />
                </button>
                <button className="hover:bg-gray-100 p-2 rounded-full">
                  <MoreVertical />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {/* Placeholder for chat messages */}
              <div className="text-center text-gray-500">
                No message history available
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4 flex items-center">
              <button className="mr-2 text-gray-600 hover:text-blue-600">
                <Paperclip />
              </button>
              <input 
                type="text" 
                placeholder="Type a message..." 
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-grow mr-2 p-2 border border-gray-200 rounded-lg"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
              >
                <Send />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="mx-auto mb-4 h-16 w-16 text-blue-600" />
              <p>Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;