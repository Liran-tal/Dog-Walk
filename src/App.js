import React, {useState, useEffect, useMemo} from 'react';
import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';
import Api from './API/Mock.api.js';
import Home from './pages/Home.page.jsx';
import DogWalker from './pages/WalkerProfile.page.jsx';
import NavBar from './components/NavBar/NavBar.component.jsx';

import PageNotFound from "./pages/NotFound.page.jsx";
import { UserContext } from './components/UserContext/UserContext.js';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
		async function getUsersData() {
			try {
				const data = await Api.getData();
				if (data) {
					setData(data);
				}
				else {

        }
			} 
      catch (error) {
				
			}
		} 

		getUsersData();
	}, []);

  return (
    <div className="App">
      בוקר טוב עולם   
      <BrowserRouter>
        {/* {displayTags()} */}
        <UserContext.Provider value={{user, setUser}}>
          <Routes>
            <Route 
              path="/"
              element={<Home data={data} />}
            />
            <Route 
              path="/walker/:name"
              element={<DogWalker data={data} />}
            />
            <Route 

            />
            <Route 
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
        </UserContext.Provider>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
