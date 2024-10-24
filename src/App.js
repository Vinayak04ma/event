import Header from "./components/Header"
import './App.css';

import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';
// import Carousel from "./components/Carousel";
// import slides from "./data/carsourData";
// // import Calender from "./components/Calender"
// import Foot from "./components/Foot"
// import ExploreC from "./components/ExploreC";
// import Citiess from "./components/Citiess";
// import C from "./components/C";
// import Feedback from "./components/screens/Feedback";
// import Rajistration from "./components/screens/Rajistration"

import Home from './components/screens/Home';
import Feedback from './components/screens/Feedback';
import RegistrationForm from './components/screens/RegistrationForm';

function App() {
 
  return (
    <>
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
    </Router>
  
  </>

  );
}

export default App;
