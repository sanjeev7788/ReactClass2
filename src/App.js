import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Home from './Home';
import Loginpage from './Loginpage';
function App() {
  return (
    <Grid className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>    
    </Routes>
    </BrowserRouter>
    </Grid>
  );
}

export default App;
