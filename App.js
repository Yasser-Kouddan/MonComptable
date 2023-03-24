import StartApp from './app/navigation/StartAppNav';
import { auth } from './app/firebase/FirebaseConfig';


export default function App() {

  console.log("The current user is: "+auth.currentUser?.uid)

  return ( 
      // the real app
        <StartApp/>
      // testing plus button
      /* <NavigationContainer>
          <NavBar/>
        </NavigationContainer> */
    // <ProfileScreen/>
     //<SignupScreen/>
  );
}


