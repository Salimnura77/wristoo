const Picturecard = (props) => {
  return (
    <div className="contact">
      <div className="card">
        <img src={props.icon} className="card-img1" />
        <div>
          <h3 className="watchdetail">
            <span>{props.model}</span>
          </h3>
          <span className="span-watchdetail">
            MENs CHAIN ROLEX. ARABIAN OYSTER
          </span>
          <h4>
            <span></span>
          </h4>
        </div>
        <button className="btninquiry">
          <a
            href="https://www.whatsapp.com/channel/0029Va92Cx2LY6dGIvpCYK19"
            className="button"
          >
            Make Inquirey
          </a>
        </button>
      </div>
    </div>
  );
};

export default Picturecard;
