import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Background from '../components/background'
import SendButton from '../components/sendButton';
import FormBox from '../components/form/formBox';
import PasswordBox from '../components/form/passwordBox';

import '../stylesheets/forms/forms.css';

function Login() {
    const auth = getAuth();
    const navigate = useNavigate();

    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

	const signInWithEmail = async () => {
        setAuthing(true);
        setError('');

        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/chat');
            })
            .catch(error => {
                console.log(error);
                if (error.message == "Firebase: Error (auth/invalid-credential).") error.message = "E-mail ou senha inválidos";
                setError(error.message);
                setAuthing(false);
            });
    }


    return (
        <div id='login'>
            <Background/>
            <div className="screen-center text-center">
                <div className="logo">
                    <img src="/logo.svg" alt="CCEE"/>
                    <div className="subtitle">CENTRAL DE COMUNICAÇÃO ESTUDANTIL POR E-MAIL</div>
                </div>
                <div className="subtitle">LOGIN</div>
                <form>
                    <FormBox 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required={true}
                        placeholder="E-mail"
                    />
                    <PasswordBox
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                        placeholder='Senha'
                        autocomplete='on'
                    />
                    {error && <div className='error'>{error}</div>}
                    <div className='not-signed align-right '>
                        <a href="/recuperacao">Esqueceu a senha?</a>
                    </div>
                    <div className='subtext align-right'>
                        <a href="/cadastro">Não é cadastrado?</a>
                    </div>
                    <SendButton 
                        onClick={signInWithEmail}
                        disabled={authing}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login