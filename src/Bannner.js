const Vbannner = (props) => {
    return (
        <div className="videotag">
        <video  autoPlay loop muted>
            <source src={props.vban} type='video/mp4' />
        </video>
            <p className="para">
          Explore the collection of prestigious high-precision Rolex watches.
          Rolex provides a wide selection of professional and classic watches to
          fit any doll. Discover the great selection of Rolex watches - a
          perfect combination of style and functionality.
            </p>
        </div>
    );
}
 
export default Vbannner;