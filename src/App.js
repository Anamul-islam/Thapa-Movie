 
import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingleMovies from './Component/SingleMovies';
import Error from './Component/Error';

function App() {
  return (

     <> 

     
    <BrowserRouter>
        <Routes>
          <Route path="/" element={  <Home/>} />
          <Route path="movie/:id" element={  <SingleMovies/>} />
          <Route path="*" element={ <Error/> } />
        </Routes>
  </BrowserRouter>

    
      

      
     </>
    
  );
}

export default App;
