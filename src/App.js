import React, {useState, useEffect, useMemo} from 'react';
import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';
import Api from './API/Mock.api.js';
import Home from './pages/home/Home.page.jsx';
import DogWalker from './pages/walkerProfile/WalkerProfile.page.jsx';
import NavBar from './components/NavBar/NavBar.component.jsx';
import Login from './pages/login/Login.page.jsx';
import PageNotFound from "./pages/notFound/NotFound.page.jsx";
import { UserContext } from './components/UserContext/UserContext.js';
import User from './pages/user/User.page.jsx';
import Favorites from './pages/favorites/Favorites.page.jsx';
import Logo from './components/logo/Logo.jsx';
import './App.css';


function App() {

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [isUpdateData, setisUpdateData] = useState(false);

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
	}, [isUpdateData]);


  function userDidChanged () {
    setisUpdateData(!isUpdateData);
  } 

  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <UserContext.Provider value={{user, setUser}}>
          <div className='App-main-wrapper'>
            <Routes>
              <Route 
                path="/"
                element={<Home data={data} userDidChanged={userDidChanged} />}
              />
              <Route 
                path="/walker/:id"
                element={<DogWalker data={data} userDidChanged={userDidChanged} />}
              />
              <Route 
                path="/login"
                element={<Login data={data} userDidChanged={userDidChanged}/>}
              />
              <Route 
                path="/user"
                element={<User userDidChanged={userDidChanged}/>}
              />
              <Route 
                path="/favorites"
                element={<Favorites userDidChanged={userDidChanged}/>}
              />
              {/* <Route 
                path="/search"
                element={<Sea userDidChanged={userDidChanged}/>}
              /> */}
              <Route 
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
            <NavBar />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
