
import AttachFiles from "./messageBox/attachFiles"
import SendButton from "../sendButton"
import FormBox from "../form/formBox"
import { useState } from 'react';

function MessageBox() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    if (!email || !message) {
      alert('Please enter both email and message');
      return;
    }
    
  };

  return (
    <div className="wrapper">
      <FormBox 
        className="target-emails" 
        placeholder="Endereços de e-mail para enviar" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="messageBox">
        <AttachFiles/>
        <input 
          placeholder="Escreva aqui" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <SendButton 
          className="sendMessageButton" 
          onClick={handleSendEmail}
        />
      </div>
    </div>
  )
}

export default MessageBox