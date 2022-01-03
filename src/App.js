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
import User from './pages/user/User.page.jsx';

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


  console.log("user: ", user);
  console.log({data});
  
  
  return (
    <div className="App">
      בוקר טוב עולם   
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          {/* {displayTags()} */}
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
              path="/user"
              element={<User />}
            />
            <Route 
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
          <NavBar />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
