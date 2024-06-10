
import {Route, Routes,} from "react-router-dom"
import Home from "./component/Home/Home.jsx"
import Search from "./component/Search/Search.jsx";



function App() {
  return (
    
   <>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          
        </Routes>
    </div>
   </>
  );
}

export default App;
