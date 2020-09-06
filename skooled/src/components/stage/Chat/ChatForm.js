import React, { useState, useContext } from 'react';
import { db, timestamp } from '../../../Firebase';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../../../UserContext';
import './Chat.css';

function ChatForm() {
  const { globalUser } = useContext(UserContext);
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    db.collection('messagesURL')
      .add({
        user: globalUser.displayName,
        text,
        time: timestamp(),
      })
      .then(() => {
        //Chat Reset To Bottom
        setText('');
        document.querySelector('.chat-scroll').scrollBy(0, 2000);
      });
  }
  return (
    <div className="chat-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Enter Message"
          variant="outlined"
          className="chat-form-field"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ChatForm;
