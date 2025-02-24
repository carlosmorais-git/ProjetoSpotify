import 'react'
import SongItem from './SongItem'
import PropTypes from 'prop-types';

const SongList = ({ musicasFiltradaPeloArtista}) => {

 
  return (
    <div className='song-list'>
      {
          musicasFiltradaPeloArtista
          .filter((_, index) => index < 5)
          .map((valor,chave) => (
            <SongItem 
            {...valor}
            index = {chave + 1}
            key={`musica_${chave}`} 
            />
          ))
          
          
      }
  

    </div>
   
  )
}
SongList.propTypes = {
  musicasFiltradaPeloArtista: PropTypes.array,
};
export default SongList