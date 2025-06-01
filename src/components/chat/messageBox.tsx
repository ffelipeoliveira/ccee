import AttachFiles from "./messageBox/attachFiles"
import SendMessageButton from "./messageBox/sendMessageButton"

function messageBox() {
  return (
	<div className="messageBox">
		<AttachFiles/>
		<SendMessageButton/>
	</div>
  )
}

export default messageBox