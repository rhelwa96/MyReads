import "./App.css";
import Home from  './components/1.Home'
import Search from  './components/Search'
import {Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
         <Route path="/search" element={<Search/>}/>
         <Route path="/" element={<Home/>}/>
    </Routes>
 
  );
}

export default App;
