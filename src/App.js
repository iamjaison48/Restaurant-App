import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import AllRest from './Components/AllRest/AllRest';
import { Route, Routes } from 'react-router-dom';
import Viewrest from './Components/ViewRest/Viewrest'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          {/*localhost://3000 - all restaurant*/}
          <Route path='/' element={<AllRest/>}/>
          <Route path='/View/:id' element={<Viewrest/>}/>
        </Routes>

        <Footer/>

      </header>
    </div>
  );
}

export default App;
