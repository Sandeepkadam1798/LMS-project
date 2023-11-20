import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentDashbord from './ParentDashbord/ParentDashbord'


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>

        <Route path="/" element={[<ParentDashbord />]}/>
        <ParentSideNav/>
    
      </Routes>
      </BrowserRouter> */}
       
       
       <ParentDashbord/>
       
       
      
  
      
    </>
  );
}

export default App;
