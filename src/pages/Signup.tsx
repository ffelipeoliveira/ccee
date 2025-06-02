import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Background from '../components/background'
import SendButton from '../components/sendButton';

function Signup() {
  const auth = getAuth();
  const navigate = useNavigate();

	const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const signUpWithEmail = async () => {
    if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
    }

    setAuthing(true);
    setError('');

    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
            setAuthing(false);
    });
  };
  return (
    <>
      <Background/>
      <div className="form signup-form">
                <div className="logo">
                    <img src="/logo.svg" alt="CCEE"/>
                    <div className="subtitle">CENTRAL DE COMUNICAÇÃO ESTUDANTIL POR E-MAIL</div>
                </div>
				<div className="subtitle">CADASTRO</div>
				<form>
					{/*E-mail*/}
					<div className="input">
						<input type="text"
							className="input-field"
							value={email}
							required={true}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label className="input-label">Email</label>
					</div>
					<div className='input'>
						<input type="password"
							className="input-field"
							value={password}
							required={true}
							onChange={(e) => setPassword(e.target.value)} 
						/>
						<label className="input-label">Senha</label>
					</div>
					<div className='input'>
						<input type="password"
							className='input-field'
							value={confirmPassword}
							required={true}
							onChange={(e) => setConfirmPassword(e.target.value)} 
						/>
						<label className="input-label">Confirmar Senha</label>
					</div>
					{error && <div className='text-red-500 mb-4'>{error}</div>}
					<div className='buttons'>
					<SendButton 
						onClick={signUpWithEmail}
						disabled={authing}
					/>
					</div>
				</form>
			</div>
    </>
  )
}

export default Signup