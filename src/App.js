import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Settings from './pages/User/Settings/Settings';
import Profile from './pages/User/Profile/Profile';
import Gallery from './pages/Gallery/Gallery';
import Favorite from './pages/Favorite/Favorite';
import Music from './pages/Favorite/Music/Music';
import Food from './pages/Favorite/Food/Food';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='user' element= {<User/>} />
        <Route path='user/settings' element={<Settings/>} />
        <Route path='user/profile' element={<Profile/>} />
        
        <Route path='gallery' element= {<Gallery/>} />
        
        <Route path='favorite' element= {<Favorite/>} />
        <Route path='favorite/music' element={<Music/>} />
        <Route path='favorite/food' element={<Food/>} />
       
      </Routes>
    </div>
  );
}

export default App;
