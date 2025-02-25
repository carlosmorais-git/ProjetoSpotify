import 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from 'react-router-dom'

// Componente
import SongList from '../components/SongList'

// Base de dados de Artistas e Musicas
import { artistArray } from '../src/assets/database/artists';
import { songsArray } from '../src/assets/database/songs';

/* 
Variação entre Js para Jsx
  background-image => backgroundImage
  class => className

Explicação:
  useState () => VARIAVEL DE ESTADO
  useParams() => RECUPERO VALOR PASSADO NO URL

*/
const Artist = () => {
  // Valores de variaveis mudam por evento de clique do usuario

  const valorPadrao = 5// varivale comum 

  // Quando for necessario mudar um valor de uma variavel depois que ela já estiver renderizada,
  // preciso usar o 'userState' => Variavel de estado para manipular por debaixo dos panos.
  const [tamanho, setTamanho] = useState(valorPadrao);// variavel de estado

  // Array do artista
  const { artist_id } = useParams();// valor recuperado no url
  const artista = artistArray.filter((valor) => valor.id === Number(artist_id))[0];

  // Filtra o array de músicas para obter apenas as do artista selecionado
  const musicasFiltradaPeloArtista = songsArray.filter((valor) => valor['artist'] === artista.name);
  const tamanhoTotal = musicasFiltradaPeloArtista.length;
  
  /*
  Usando as musicas filtradas do artista selecionado, 
  selecionei uma música aleatória para o botão de play.
  
  Isso é feito gerando um número aleatório baseado no tamanho do array filtrado,
  garantindo que um índice válido seja escolhido.
  */
 
  const musicaAleatoria = musicasFiltradaPeloArtista[
    parseInt(Math.random() * tamanhoTotal)].id;

  const mudarTamanhoLista = () => {
    // Funcao tem o objetivo de mudar o tamanho de exibicao da lista de musicas do artista selecionado
    setTamanho(valor => (valor === valorPadrao ? tamanhoTotal : valorPadrao));

  };

  return (
    <div className='artist'>
      <div className='artist__header' style={{
        backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artista.banner})`,
      }}>

        <div className='artist__title'>{artista.name}</div>

      </div>

      <div className='artist__body'>
        <h2>Populares</h2>

        <SongList musicasFiltradaPeloArtista={musicasFiltradaPeloArtista} tamanho={tamanho} />

        <h2 className='song-list__see-more' onClick={mudarTamanhoLista}>

          {/* caso nao clico no ver mais permanecera com o tamanho padrao */}
          {valorPadrao === tamanho ? 'Ver mais' : 'Ver menos'}

        </h2>

      </div>

      {/* Botao de play da musica */}
      <Link to={`/song/${musicaAleatoria}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>

    </div >


  )
}

export default Artist