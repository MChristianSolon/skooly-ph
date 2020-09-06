import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SingleMessage from './SingleMessage';
import ChatForm from './ChatForm';
import { db } from '../../../Firebase';
import './Chat.css';

function Chat() {
  const [chatLog, setChatLog] = useState([]);
  useEffect(() => {
    db.collection('messagesURL')
      .orderBy('time')
      .onSnapshot((snapshot) => {
        setChatLog(() => {
          let chatArr = snapshot.docs.map((message) => {
            return <SingleMessage key={message.id} message={message.data()} />;
          });
          return chatArr;
        });
      });
  }, []);
  return (
    <div className="chat">
      <Card variant="outlined" className="chat">
        <CardContent className="chat-cardContent">
          <div className="chat-scroll">{chatLog}</div>
          <ChatForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default Chat;
