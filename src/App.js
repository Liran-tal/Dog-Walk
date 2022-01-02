import React, {useState, useEffect, useMemo} from 'react';
import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';
import Api from './API/Mock.api.js';
import Home from './pages/home/Home.page.jsx';
import DogWalker from './pages/walkerProfile/WalkerProfile.page.jsx';
import NavBar from './components/NavBar/NavBar.component.jsx';
import Login from './pages/login/Login.page.jsx';
import PageNotFound from "./pages/notFound/NotFound.page.jsx";
import { UserContext } from './components/UserContext/UserContext.js';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
		async function getUsersData() {
			try {
				const data = await Api.getData();
        console.log(data);
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
  console.log("user: ", user);
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
              path="/walker/:id"
              element={<DogWalker data={data} />}
            />
            <Route 
              path="/login"
              element={<Login data={data} />}
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
