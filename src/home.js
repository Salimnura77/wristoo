import Banner from './Navbar';
import Picturecard from './Card';
import Pagination from './Pagination';
//import Useeff from './Useeff';
//import Firstapi from './Firstapi';
import Icon from './images/rolex (2).png';
import Icon2 from './images/WhatsApp Image 2023-11-28 at 20.36.05_ffdc8cb3.jpg';
//import image from'./images/rolex.jpg';
import img01 from './images//WhatsApp Image 2023-11-28 at 20.36.07_464882be.jpg';
import img02 from './images/WhatsApp Image 2023-11-28 at 20.36.28_56fafe0d.jpg';
import img03 from './images/arabic2.jpg';
import img07 from './images/arabic4.jpg';
import img04 from './images/arabic3.jpg';
import img05 from './images/WhatsApp Image 2023-11-23 at 12.49.53_f2aecd0f.jpg';
import img06 from './images/WhatsApp Image 2023-11-21 at 12.07.25_5c3840e4.jpg';
import vid01 from './images/rolexvid.mp4';
import About from './about';
import Vbannner from './Bannner';
import Footer from './Footer';


const Home = () => {

   const models = {model1:'Skin', model2:'Gold', model3:'Silver', model4:'Bronze'};
   const color = {col1: 'arabic',col2: 'plain',col3: 'roman'};   

    return (
        <div className='home'>
        <Banner iconnav={Icon} /><br></br>
         <Vbannner vban={vid01} />
         <hr />
         <hr />
         <div className='grid-container'>
      <Picturecard icon={img05} model={models.model1} />
         <Picturecard icon={Icon2} model={models.model2} />
         <Picturecard icon={img01} model={models.model3}/>
         <Picturecard icon={img02} model={models.model4}/>
         <Picturecard icon={img03} model={models.model3}/>
         <Picturecard icon={img04} model={models.model4}/>
         <Picturecard icon={img06} model={models.model2}/>
         <Picturecard icon={img07} model={models.model4}/>
         </div>
         <hr />
         <hr />
         <Pagination /><br /><br />
         <hr />
         <Footer />
         </div>
      );
}
 
export default Home;