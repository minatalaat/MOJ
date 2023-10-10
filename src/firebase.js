import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage} from "firebase/messaging"


var firebaseConfig ={  
    apiKey: "AIzaSyB0IRVwO9dklvHm_cMG-_Qq4e6u6eK8fmw",
    authDomain: "moj-notification-system.firebaseapp.com",
    projectId: "moj-notification-system",
    storageBucket: "moj-notification-system.appspot.com",
    messagingSenderId: "64185784083",
    appId: "1:64185784083:web:049f2332110eefb294ece6",
    measurementId: "G-Q1Q6QJJPQ6"
}
const firebaseapp = initializeApp(firebaseConfig)
const messaging = getMessaging(firebaseapp)

// onMessage(messaging, (payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });

export const fetchToken  = (setTokenFound,setFcmToken) =>{
    return getToken(messaging, { vapidKey: 'BOCMLONttimv2aPbRAJ_NSeQVuDynTMHRy4N3ZxuuGc4gs-6MRelQDkywWTl9Gu38G8GgMu7hD_RSxz4JxBe9Ic' }).then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          setTokenFound(true)
          setFcmToken(currentToken)
        } else {
          // Show permission request UI
          setTokenFound(false)
          setFcmToken('')
          
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
}


export const onMessageListener = () =>
    new Promise((resolve)=>{
        onMessage(messaging,(payload)=>{
          console.log('Front'+payload);
            resolve(payload)
        });
    });

    
