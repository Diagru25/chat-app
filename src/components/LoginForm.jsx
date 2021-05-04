import axios from "axios";
import { useState } from "react"

const LoginForm = () => {
    const [user_name, setUserName] = useState('');
    const [user_secret, setPassWord] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '61f514ab-7ad4-49c9-b064-6b7ce2e7a6b5', 'User-Name': user_name, 'User-Secret': user_secret};

        try {
            console.log(authObject);
            await axios.get('https://api.chatengine.io/chats/', { headers: authObject });

            localStorage.setItem('username', user_name);
            localStorage.setItem('password', user_secret);

            window.location.reload();
        } catch (err) {
            setError('Incorrect credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat App
                </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        stype='text'
                        value={user_name}
                        className='input'
                        placeholder='username'
                        onChange={(e) => setUserName(e.target.value)}

                    />
                    <input
                        type='password'
                        value={user_secret}
                        className='input'
                        placeholder='password'
                        onChange={(e) => setPassWord(e.target.value)}
                    />

                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;