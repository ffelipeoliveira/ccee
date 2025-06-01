import React from 'react'

import MessageText from './message/messageText';
import Name from './message/name';
import ProfilePic from './message/profilePic';
import ReplyButton from './message/replyButton';

function message() {
  return (
	<div className="message">
		<ProfilePic/>
		<>
			<Name/>
			<MessageText/>
		</>
		<ReplyButton/>
	</div>
  )
}

export default message