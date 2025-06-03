import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { FaArrowRightFromBracket } from "react-icons/fa6";

function Logout() {
  const auth = getAuth();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
        await signOut(auth);
        navigate('/');
    } catch (error) {
        console.error('Erro ao sair:', error);
    }
  };

  return (
	<div className="logout">
		<FaArrowRightFromBracket onClick={logOut} className='subIcon'/>
	</div>
  )
}

export default Logout