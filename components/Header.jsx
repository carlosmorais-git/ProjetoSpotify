import logoSpotify from "../src/assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      {/* Use chaves para receber codigos em javascripts */}
      <Link to='/'>
        <img src={logoSpotify} alt='Foto Logo'/>      
      </Link>

      <Link className="header__link" to="/">
      <h1>Spotify</h1>
      </Link>

    </div>
  )
}

export default Header