import Background from '../components/background'

import ChatsPanel from '../components/chat/chatsPanel';
import SettingsBar from '../components/chat/settingsBar';
import MessagePanel from '../components/chat/messagePanel';
import MessageBox from '../components/chat/messageBox';

import '../stylesheets/chat/chat.css';

function Chat() {
  return (
    <div id='chat'>
      <Background/>
      <div className='flex-auto'>
        <div className="left">
            <ChatsPanel/>
            <SettingsBar/>
        </div>
        <div className="right">
            <MessagePanel/>
            <MessageBox/>
        </div>
      </div>
    </div>
  )
}

export default Chat