import { BrowserRouter, Routes, Route, Links } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.component.jsx';
import { UserContext } from './components/UserContext/UserContext.js';

import PageNotFound from "./pages/NotFound.page.jsx";
import './App.css';
import Home from './pages/home.page.jsx';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
		async function getUsersData() {
			try {
				const data = Api.getData();
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
      <UserContext.Provider>
        <Routes>
          <Route 
            path="/"
            element={<Home data={data} />}
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
