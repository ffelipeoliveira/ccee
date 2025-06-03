import AttachFiles from "./messageBox/attachFiles"
import SendButton from "../sendButton"

function messageBox() {
  return (
	<div className="messageBox">
		<AttachFiles/>
		<input type="text" placeholder="Escreva aqui"></input>
		<SendButton className="sendMessageButton"/>
	</div>
  )
}

export default messageBox