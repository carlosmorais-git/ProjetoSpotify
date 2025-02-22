import 'react'
import ItemList from './ItemList'
import PropTypes from 'prop-types';
// Base de dados de Artistas e Musicas
import { artistArray } from '../src/assets/database/artists';
import { songsArray } from '../src/assets/database/songs';

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
          item={10}
          itemArray={songsArray}
          path='/songs'
          idPath='/song' />

      ) : (
        <></> // nao faz nada
      )}

    </div>
  );
};

Main.propTypes = {
  type: PropTypes.type,

};

export default Main