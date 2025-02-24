import 'react'
import Player from '../components/Player'
import { Link , useParams } from 'react-router-dom'
import { songsArray } from '../src/assets/database/songs';
import { artistArray } from '../src/assets/database/artists';

const Song = () => {
  
  const { song_id } = useParams();

  
  const musicaSelecionada = songsArray
  .filter((valor) => valor.id === parseInt(song_id))
  .map((valor) => valor)[0];
  const artista = artistArray.filter((valor) => valor.name === musicaSelecionada.artist)[0]


  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={ musicaSelecionada.image }
            alt={ `Imagem da musica ${musicaSelecionada.name}` } />
        </div>
      </div>

      <div className='song__bar'>
        <Link to={ `/artist/${artista.id}` } className='song__artist-image'>
          
            <img
              src={ artista.image }
              alt=""
            />
          
        </Link>

        <Player duracao = { musicaSelecionada.duration } audio = { musicaSelecionada.audio }/>

        <div>
          <p className='song__name'>{ musicaSelecionada.name }</p>
          <p>{ musicaSelecionada.artist }</p>
        </div>

      </div>



    </div>
  )
}

export default Song