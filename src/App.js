import Banner from './Navbar';
import Picturecard from './Card';
import Footer from './Pagination';
//import Useeff from './Useeff';
//import Firstapi from './Firstapi';
import Icon from './images/rolex (1).png';
import Icon2 from './images/WhatsApp Image 2023-11-28 at 20.36.05_ffdc8cb3.jpg';
//import image from'./images/rolex.jpg';
import img01 from './images//WhatsApp Image 2023-11-28 at 20.36.07_464882be.jpg';
import img02 from './images/WhatsApp Image 2023-11-28 at 20.36.28_56fafe0d.jpg';
import img03 from './images/WhatsApp Image 2023-11-29 at 22.06.30_2b4c3ce0.jpg';
import img04 from './images/WhatsApp Image 2023-11-29 at 22.06.41_e66158a8.jpg';
import img05 from './images/WhatsApp Image 2023-11-23 at 12.49.53_f2aecd0f.jpg';
import img06 from './images/WhatsApp Image 2023-11-21 at 12.07.25_5c3840e4.jpg';
import vid01 from './images/rolexvid.mp4';
import About from './about';
import Vbannner from './Bannner';
import { useState } from 'react';
import {Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './home';





function App() {
   return( 
    <div className='banner'>
               <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
         </Routes>
         </div>
   )}

export default App;
