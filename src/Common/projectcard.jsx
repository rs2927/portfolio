
function Projectcard({src , link , h3}) {
  return (
    <a href= {link}>
    <img className="hover" src={src} alt="portfolio"></img>
   <h3>{h3}</h3>
    </a>
  )
};

export default Projectcard;     