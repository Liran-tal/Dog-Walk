import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component.jsx';

import PageNotFound from "./pages/NotFound.page.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      בוקר טוב עולם   
      <BrowserRouter>
      {/* {displayTags()} */}
      <Routes>
        <Route 
          
        />
        <Route 
        
        />
        <Route 
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
