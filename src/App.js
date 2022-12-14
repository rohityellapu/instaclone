
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import Postview from './PostView/Postview.jsx';
const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/postview' element={ <Postview /> }>

          </Route>
          <Route path='/' element={ <LandingPage /> }>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
