import User from './settingsBar/user';
import Logout from './settingsBar/logout';
import Settings from './settingsBar/settings';

function settingsBar() {
  return (
	<div className="settingsBar">
		<User/>
		<Logout/>
		<Settings/>
	</div>
  )
}

export default settingsBar