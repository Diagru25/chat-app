import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID='61f514ab-7ad4-49c9-b064-6b7ce2e7a6b5'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;