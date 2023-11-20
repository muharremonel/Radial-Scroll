import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Cursor from './components/cursor';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900-italic.css";
import MainPage from './pages/mainpage';
import OrbitMenu from './pages/orbitMenu';
import ContentPage from './pages/content';
import Referances from './components/referances';
import Navigation from './components/navigation';
import Navbar from './components/navbar';
import Slider from './components/slider/slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Cursor/>
  <Slider/>
    
{/*     <Navbar/>
    <div className='main-flex'>
      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-6'>
            <OrbitMenu />
          </div>
          <div className='col-md-6 p-4'>
            <App/>
          </div>
        </div>
        <Referances/>
        <Navigation/>
      </div>
      <div className='col-md-6'>
        <ContentPage/>
      </div>
    </div> */}
  </BrowserRouter>
);

reportWebVitals();
