import "./FooterStyles.css"


const Footer = () =>{
  return(
    <div className="footer">
        <div className="top">
            <div>
            <h1> EnicarEvents </h1>
            <p> Enicarthage Events </p>
        </div>
        <div>
            <a href="https://www.facebook.com/Ecole-Nationale-dIng%C3%A9nieurs-de-Carthage-ENICarthage-532762086862252">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/enicarthage/">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
            
        </div>
        </div>
    
    <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="http://www.enicarthage.rnu.tn/fr/opportunites/centre4c">  4C Center </a>
            <a href="http://www.enicarthage.rnu.tn/"> News </a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="http://www.enicarthage.rnu.tn/fr/ecole/club">  Clubs </a>
            <a href="http://www.enicarthage.rnu.tn/fr/ecole/">  Profesionnal Team </a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="http://www.enicarthage.rnu.tn/fr/contact">  Enicarthage Contact</a>
            <a href="http://www.enicarthage.rnu.tn/fr/ecole/apropos">  About </a>
        </div>
        <div>
            <h4>Others</h4>
            <a href="http://www.enicarthage.rnu.tn/fr/opportunites/stageetemplois">  Opportunities</a>
            <a href="http://www.enicarthage.rnu.tn/fr/docs">  Documents</a>
        </div>
        </div>
    </div>
   

  )

}
export default Footer;