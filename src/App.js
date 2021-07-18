import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.jsx'


function App() {
  const alertName = name => alert(name)
  
  return (
    <div className="App">
      <header className="App-header">
        <Profile alertName={alertName} fullName="Ismail Halouani" bio="I love Coding and Designing" profession="Web Developer and Designer" >
          <img src="http://source.unsplash.com/random/200x200" style={{borderRadius:"50em"}}/>
        </Profile>
      </header>
    </div>
  );
}


export default App;
