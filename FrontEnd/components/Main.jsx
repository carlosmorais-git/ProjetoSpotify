import 'react'
import ItemList from './ItemList'
import PropTypes from 'prop-types';
// Base de dados de Artistas e Musicas
import { artistArray } from '../src/assets/database/artists';
import { songsArray } from '../src/assets/database/songs';
// import Player from './Player';

const Main = ({ type }) => {
  return (
    <div className="main">

      {/* Lista Artista 
      verifica se o tipo passado é artists ou home e caso contrario reideriza nada */}
      { type === 'artists' || type === undefined ? (
        
        <ItemList
          title='Artista'
          item={5}
          itemArray={artistArray}
          path='/artists'
          idPath='/artist' />

      ) : (
        <></> // nao faz nada
      )}

      {/* Lista de Musicas */}
      { type === 'songs' || type === undefined ?  (
        
        <ItemList
          title='Musicas'
          item={15}
          itemArray={songsArray}
          path='/songs'
          idPath='/song' />

      ) : (
        <></> // nao faz nada
      )}
      {/* <div className='song__bar--floating'>

      <Player duracao = { '02:12' }
        audio = { "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3" } 
        idMusica = { "67bf3a1f1e647ca9782dbf71" } 
        artist={ 'Zé Neto & Cristiano' } />
      </div> */}


    </div>
  );
};

Main.propTypes = {
  type: PropTypes.type,

};

export default Main