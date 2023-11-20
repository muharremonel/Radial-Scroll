import './App.css';
import { Routes, Route } from 'react-router-dom'
import  MainPage  from "./pages/mainpage";
import ContactPage from './pages/contact';

function App() {

  return (
    <Routes>
        <Route
          path='/'
          element={<MainPage />}
        />
        <Route
          path='/contact'
          element={<ContactPage />}
        />
      </Routes>
  );
}

export default App;
