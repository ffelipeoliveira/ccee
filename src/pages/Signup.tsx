import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Background from '../components/background'
import SendButton from '../components/sendButton';
import BackButton from '../components/backButton';
import FormBox from '../components/form/formBox';
import PasswordBox from '../components/form/passwordBox';
import CheckBox from '../components/form/checkBox';

import '../stylesheets/forms/forms.css';

function Signup() {
	const auth = getAuth();
	const navigate = useNavigate();

	const [authing, setAuthing] = useState(false);
	const [id, setID] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const signUpWithEmail = async () => {
		if (!email.endsWith('uepb.edu.br')) {
            setError('Apenas emails institucionais (.uepb.edu.br) são permitidos');
            return;
        }
		if (!/^\d{9}$/.test(id)) {
            setError('Matrícula inválida');
            return;
        }
		if (password !== confirmPassword) {
			setError('Senhas não são iguais');
			return;
		}

    setAuthing(true);
    setError('');

    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response.user.uid);
            navigate('/chat');
        })
        .catch(error => {
            console.log(error);
			if (error.message == "Firebase: Error (auth/email-already-in-use).") error.message = "Cadastro já existente";
            setError(error.message);
            setAuthing(false);
    });
  };
  return (
    <>
      <Background/>
      <div className=" screen-center text-center">
                <div className="logo">
                    <img src="/logo.svg" alt="CCEE"/>
                    <div className="subtitle">CENTRAL DE COMUNICAÇÃO ESTUDANTIL POR E-MAIL</div>
                </div>
				<div className="subtitle">CADASTRO</div>
				<form>
					<FormBox
						value={id}
						onChange={(e) => setID(e.target.value)}
						required={true}
						placeholder='Matrícula'
					/>
					<FormBox
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required={true}
						placeholder='Email'
					/>
					<PasswordBox
							value={password}
							onChange={(e) => setPassword(e.target.value)} 
							required={true}
							placeholder='Senha'
							autocomplete='off'
					/>
					<PasswordBox
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)} 
							required={true}
							placeholder='Senha'
					/>
					<CheckBox 
						id='terms' 
						label={
							<span>
							Concordo com os <a id='terms-link' href="/terms.txt" onClick={(e) => { e.preventDefault(); }}>Termos de Serviço</a>
							</span>
						} 
						required
					/>
					{error && <div className='error'>{error}</div>}
					<div className="flex-auto">
						<BackButton link='login'/>
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