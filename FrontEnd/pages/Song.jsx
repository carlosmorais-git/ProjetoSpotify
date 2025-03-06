import 'react'
import Player from '../components/Player'
import { Link , useParams } from 'react-router-dom'
import { songsArray } from '../src/assets/database/songs';
import { artistArray } from '../src/assets/database/artists';

const Song = () => {
  
  const { song_id } = useParams();
 
  // Musica selecionada
  const { artist,name,duration,audio,image } = songsArray
  .filter((valor) => valor._id === song_id)[0];


  // Buscar dados do artista da musica
  const artista = artistArray.filter((valor) => valor.name === artist)[0]


  return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={ image }
            alt={ `Imagem da musica ${name}` } />
        </div>
      </div>

      <div className='song__bar'>
        <Link to={ `/artist/${artista._id}` } className='song__artist-image'>
          
            <img
              src={ artista.image }
              alt=""
            />
          
        </Link>

        <Player duracao = { duration } audio = { audio } idMusica = {song_id }  artist={artist}/>

        <div>
          <p className='song__name'>{ name }</p>
          <p>{ artist }</p>
        </div>

      </div>



    </div>
  )
}

export default Song