import './App.css';
import Navbar1 from './components/Navbar/Navbar'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import FAQ from './components/Navbar/FAQ'
import Book from './components/Pages/Book'
import Main from './components/Pages/Main';
import Theme from './components/Pages/Theme'
import Contact from './components/Pages/Contact';
import Coloured from './components/Pages/Coloured';
import Service from './components/Pages/Service';
import Reviews from './components/Pages/Reviews';
import Doctors from './components/Pages/Doctors';
// import More from './components/Pages/More'
import Partners from './components/Pages/Partners';
import Footer from './components/Pages/Footer'
import Rehab from './components/Pages/Rehab'
import Ophthalmology from './components/Pages/Ophthalmology';
import Pediatrics from './components/Pages/Pediatrics';
import Lab from './components/Pages/Lab';
import Laryngology from './components/Pages/Laryngology'
import Gynaecology from './components/Pages/Gynaecology';
import Cardiac from './components/Pages/Cardiac';
import Surgery from './components/Pages/Surgery'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar1/>
        <Main />
        <Contact/>
        <Coloured/>
        <Theme/>
        <Service/>
        <Reviews/>
        <Doctors/>
        {/* <More/> */}
        <Book/>
        <Partners/>
        <Footer/>
        <Switch>
        <Route path='/FAQ' component={FAQ}/>
        <Route path='/book' component={Book}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/home' component={Main}/>
        <Route path='/surgery' component={Surgery}/>
        <Route path='/cardiac' component={Cardiac}/>
        <Route path='/ophtal' component={Ophthalmology}/>
        <Route path='/gynae' component={Gynaecology}/>
        <Route path='/surgery' component={Surgery}/>
        <Route path='/cardiac' component={Cardiac}/>
        <Route path='/rehab' component={Rehab}/>
        <Route path='/laryn' component={Laryngology}/>
        <Route path='/Pediatric' component={Pediatrics}/>
        <Route path='/lab' component={Lab}/>
       
        </Switch>
        </div>
    </BrowserRouter>
      
    
  );
}

export default App;
