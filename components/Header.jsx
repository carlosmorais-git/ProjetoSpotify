import logoSpotify from "../src/assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      {/* Use chaves para receber codigos em javascripts */}
      <img src={logoSpotify} alt='Foto Logo'/>

      <a className="header__link" href="/">
      <h1>Spotify</h1>
      </a>

    </div>
  )
}

export default Header