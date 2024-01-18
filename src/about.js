import FirstApi from "./Firstapi";
import Footer from "./Footer";
import Banner from "./Navbar";
import vid02 from "./images/pexels-quang-viet-nguyen-9561302 (1).jpg"

const About = () => {
    return (
        <div className="about">
            <Banner />
            <img src={vid02} className="ban2" />
<div className='content'>
    <FirstApi />  
</div>
<Footer />
        </div>
     );
}
 
export default About;