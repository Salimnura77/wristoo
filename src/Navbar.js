import { Link } from "react-router-dom";

const Banner= (props) => {
  const scroll = () => {
    window.scrollTo(300, 1000);
  }
    return(
      <div className="navbar">
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>
  <div className="navicon">
  <img src={props.iconnav} className='icon01'/>
  </div>
  <button onClick={scroll} className="btn-hover">Collections</button>
</div>
    )
}
 
export default Banner;