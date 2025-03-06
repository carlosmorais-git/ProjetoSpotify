import 'react'
import SongItem from './SongItem'
import PropTypes from 'prop-types';

const SongList = ({ musicasFiltradaPeloArtista, tamanho}) => {

  
  return (
    <div className='song-list'>
      {
          musicasFiltradaPeloArtista
          .filter((_, index) => index < tamanho)
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
  tamanho: PropTypes.number,
};
export default SongList