import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/SongList'
// Base de dados de Artistas e Musicas
import { artistArray } from '../src/assets/database/artists';

/* 
VARIACAO DO Js para Jsx
background-image => backgroundImage
class => className
 */

const Artist = () => {

  const { id } = useParams();
  const artista = artistArray[parseInt(id) - 1]
  console.log(artista)

  return (
    <div className='artist'>
      <div className='artist__header' style={{
        backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artista.banner})`,
      }}>

        <div className='artist__title'>{artista.name}</div>

      </div>

      <div className='artist__body'>
        <h2>Populares</h2>

        <SongList artistaSelecionado={artista.name} />

        <h2 className='song-list__see-more'>Ver mais</h2>
      </div>

      {/* Botao de play da musica */}
      <Link to="/song/1">
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>

    </div >


  )
}

export default Artist