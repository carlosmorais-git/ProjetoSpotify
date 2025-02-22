import 'react'
import SongItem from './SongItem'
import PropTypes from 'prop-types';
import { songsArray } from '../src/assets/database/songs';

const SongList = ({ artistaSelecionado }) => {

  const musicasFiltradaPeloArtista = songsArray.filter((valor) => valor['artist'] === artistaSelecionado).map((valor) => valor)
  console.log(musicasFiltradaPeloArtista)
  return (
    <div className='song-list'>
      {
          musicasFiltradaPeloArtista
          .filter((_, index) => index < 5)
          .map((valor,chave) => (
            <SongItem 
            {...valor}
            key={`title_${chave}`} 
            />
          ))
          
          
      }
      { console.log(musicasFiltradaPeloArtista)}
      



    </div>
   
  )
}
SongList.propTypes = {
  artistaSelecionado: PropTypes.string,
};
export default SongList