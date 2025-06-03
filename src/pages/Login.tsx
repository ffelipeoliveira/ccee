import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Background from '../components/background'
import SendButton from '../components/sendButton';
import CheckBox from '../components/forms/checkbox';
import '../stylesheets/login/login.css';

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
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    }


    return (
        <div id='login'>
            <Background/>
            <div className="form login-form screen-center text-center">
                {/*Title*/}
                <div className="logo">
                    <img src="/logo.svg" alt="CCEE"/>
                    <div className="subtitle">CENTRAL DE COMUNICAÇÃO ESTUDANTIL POR E-MAIL</div>
                </div>
                {/*Fields*/}
                <form>
                    {/*E-mail*/}
                    <div className="formBox glass">
                        <input
                            type="text"
                            value={email}
                            required={true}
                            placeholder='E-mail'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className= "formBox passwordBox glass">
                        <input
                            type="password"
                            value={password}
                            required={true}
                            placeholder='Senha'
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <CheckBox required id='123123' label='Concordo com os termos.'/>
                    <div className='not-signed align-right '>
                        <a href="/recuperacao">Esqueceu a senha?</a>
                    </div>
                    <div className='subtext align-right'>
                        <a href="/cadastro">Não é cadastrado?</a>
                    </div>
                    {error && <div className='error'>{error}</div>}
                    <button
                        onClick={signInWithEmail}
                        disabled={authing}>
                    </button>
                    <SendButton/>
                    

                </form>
            </div>
        </div>
    )
}

export default Login