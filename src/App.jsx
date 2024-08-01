import { useState } from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Header from './Header/Header'
import Home from './Pages/Home';
import Slider from './Slider/Slider';
// import './App.css'

function App() {
  

  return (
    <>
    
    
    {/* <Router>
      
         
         <Header />
         
        <Routes>
          <Route path="/xyz"  component={<Home />} />
        </Routes>
     

    </Router> */}
   <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>

            </Routes>
   
   </BrowserRouter>

    </>
  )
}

export default App
