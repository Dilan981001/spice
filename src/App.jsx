import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/companies/companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/value';
import Contact from './components/Contact/Contact'
import GetStarted from './components/Getstarted/GetStarted'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>

    
    <Header/>
    <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
   </div>
  );
}

export default App;
