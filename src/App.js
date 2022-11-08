import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetupPage';
import NewMeetupPage from './pages/NewMeetupPage';
import FavoritePage from './pages/FavoritePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllMeetupPage/>}></Route>
        <Route path='/new-meetup' element={<NewMeetupPage/>}></Route>
        <Route path='/favorite' element={<FavoritePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
