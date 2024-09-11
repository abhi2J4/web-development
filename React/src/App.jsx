import UserCard from "./components/userCard"
import './App.css'
import maharanaPartap from './assets/maharana pratap.jpeg'
import chandersekar from './assets/chander sekhar.jpeg'
import photoStudent from './assets/photo.jpg'

function App() {


  return (
    <>
    <div className="container">
 <UserCard name="abhishek yadav" desc="desc1" img={photoStudent} style={{"border-radius":"10px"}} />
 <UserCard name ="maharnapartap" desc="desc2"img={maharanaPartap}style={{"border-radius":"10px"}}/>
 <UserCard name ="chandersekhar " desc="desc3"img={chandersekar} style={{"border-radius":"10px"}}/>
 <UserCard name = "mini"desc="desc4"img={photoStudent} style={{"border-radius":"10px"}}/>
 </div>
    </>
  )
}

export default App
