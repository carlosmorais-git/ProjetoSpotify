import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from 'react-router-dom'
import SongList from '../components/SongList'
// Base de dados de Artistas e Musicas
import { artistArray } from '../src/assets/database/artists';
import { songsArray } from '../src/assets/database/songs';

/* 
VARIACAO DO Js para Jsx
background-image => backgroundImage
class => className
 */

const Artist = () => {
  // Array do artista
  const { artist_id } = useParams();
  const artista = artistArray.filter((valor) => valor.id === Number(artist_id))[0]

  // Filtra o array de músicas para obter apenas as do artista selecionado
  const musicasFiltradaPeloArtista = songsArray
    .filter((valor) => valor['artist'] === artista.name)
    .map((valor) => valor);

  /*
  Usando as musicas filtradas do artista selecionado, 
  selecionei uma música aleatória para o botão de play.

  Isso é feito gerando um número aleatório baseado no tamanho do array filtrado,
  garantindo que um índice válido seja escolhido.
  */
  const musicaAleatoria = musicasFiltradaPeloArtista[
    parseInt(Math.random() * musicasFiltradaPeloArtista.length)].id;


  return (
    <div className='artist'>
      <div className='artist__header' style={{
        backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artista.banner})`,
      }}>

        <div className='artist__title'>{artista.name}</div>

      </div>

      <div className='artist__body'>
        <h2>Populares</h2>

        <SongList musicasFiltradaPeloArtista={musicasFiltradaPeloArtista} />

        <h2 className='song-list__see-more'>Ver mais</h2>
      </div>

      {/* Botao de play da musica */}
      <Link to={`/artist/${artist_id}/song/${musicaAleatoria}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>

    </div >


  )
}

export default Artist