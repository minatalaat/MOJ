import './App.css';
import {useState} from 'react'
import { fetchToken, onMessageListener } from './firebase.js';
import {Toast} from 'react-bootstrap'
function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
    }
  }
  )
}

function App() {
  const [show,setShow] = useState(false)
  const [notification,setNotification] = useState({title:'',body:''})
  const [isTokenFound,setIsTokenFound] = useState(false)
  const [fcmToken,setFcmToken] = useState('')
  requestPermission()
  fetchToken(setIsTokenFound,setFcmToken)



  onMessageListener().then(payload =>{
    setNotification({
      title:payload.notification.title,
      body:payload.notification.body,
      link:payload.data.redirectUrl
    })
    setShow(true)
   
   

  }).catch(err => console.log('failed'))
  return (
    <div className="App">
      <Toast onClose={()=>setShow(false)} show={show} delay={300} >
        <Toast.Header>
          <strong className='mr-auto'>{notification.title}</strong>
        </Toast.Header>
        <Toast.Body  onClick={()=> window.open(notification.link)}>
          {notification.body}
        </Toast.Body>
      </Toast>
      <header className="App-header">
        {isTokenFound && <h1>notification permission enable</h1>}
        {isTokenFound && <h6>FCM Token: {fcmToken}</h6>}
        {!isTokenFound && <h6>Not Permission</h6>}

      </header>
    </div>
  );
}

export default App;
