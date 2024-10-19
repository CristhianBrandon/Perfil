import { useEffect ,useState} from 'react';
import './App.css';
import {getProfiles} from "./lib/getProfiles";
import Profile from "./components/Profile"


function App() {
  const [profiles, setprofiles] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try{
        const response = await getProfiles("https://6707e0578e86a8d9e42d4ab3.mockapi.io/Test");
        setprofiles(response);
        console.log(profiles)
      }catch(error) {
        console.log("Error al pedir")
      }
      
    }
    fetchdata();
    
  },[]);
  return (
    <>
      <section>
        {profiles.map((profile) =>(
          <Profile key={profile.id} profile={profile}/>
        ) )

        }
      </section>
    </>
  )
}

export default App
