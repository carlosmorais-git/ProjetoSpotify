import 'react'
import Player from '../components/Player'
import { Link } from 'react-router-dom'
const Song = () => {
  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src='https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24'
            alt='Imagem da musica' />
        </div>
      </div>

      <div className='song__bar'>
        <Link to="/artist/1" className='song__artist-image'>
          
            <img
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt=""
            />
          
        </Link>

        <Player />

        <div>
          <p className='song__name'>Amigo Da Minha Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>

      </div>



    </div>
  )
}

export default Song