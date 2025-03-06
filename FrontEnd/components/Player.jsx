import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep, faShuffle, faCirclePause, faRepeat } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { songsArray } from '../src/assets/database/songs';
import { useState, useRef, useEffect } from 'react';


function mudarClassBt(referencia, classe1, classe2) {
  return referencia ? classe2 : classe1
}

const formatTime = (time) => {
  const minutos = Math.floor(time / 60)
    .toString() // converte para string
    .padStart(2, '0') // padStart complata textos nesse usará duas casas caso nao passo nada ira coloca o '0'.
  const segundos = Math.floor(time - minutos * 60)
    .toString() // converte para string
    .padStart(2, '0') // padStart complata textos nesse usará duas casas caso nao passo nada ira coloca o '0'.

  return `${minutos}:${segundos}`;
}

const convertPraSegundos = (time) => {
  const textoFinal = time.split(':');
  return Number(textoFinal[0]) * 60 + Number(textoFinal[1]); // Multiplicando os minutos por 60
};


// ***COMPONENTE PLAYER***
const Player = ({ duracao, idMusica, artist, audio }) => {

  /*
  useRef = Faz referencia como se fosse um link
  useEffect = Salva os estado de uma variavel especifica
  */

  function mudarMusica(idAtual, direcao) {
    const indexAtual = listaMusicArtista.indexOf(idAtual); // Índice da música atual

    let novoIndex;

    if (mAleatorio) {
      // Modo aleatório: retorna uma música aleatória de songsArray
      return songsArray[Math.floor(Math.random() * songsArray.length)]._id;
    } else {
      // Modo sequencial
      if (direcao === "seguir") {
        novoIndex = indexAtual + 1;

        // Se chegou ao final, retorna uma música aleatória
        if (novoIndex >= listaMusicArtista.length) {
          return songsArray[Math.floor(Math.random() * songsArray.length)]._id;
        }
      } else if (direcao === "voltar") {
        novoIndex = indexAtual - 1;

        // Se chegou ao início, retorna uma música aleatória
        if (novoIndex < 0) {
          return songsArray[Math.floor(Math.random() * songsArray.length)]._id;
        }
      }

      // Retorna a próxima/anterior música da lista do artista
      return listaMusicArtista[novoIndex];
    }
  }


  // Criando uma lista com os '_id' das músicas do artista especificado
  const listaMusicArtista = songsArray
    .filter((valor) => valor.artist === artist)
    .map((valor) => valor._id);

  /*
  Para armazenar um booleano real com =>'JSON.parse' pois o localStorage.getItem("mAleatorio") sempre retorna uma string (ou null se não existir).
  */
  const [mAleatorio, setmAleatorio] = useState(() => {
    return JSON.parse(localStorage.getItem("mAleatorio")) || false;
  });

  // salvando uma variavel de estado na sessao
  useEffect(() => {
    const valor = JSON.stringify(mAleatorio)
    localStorage.setItem("mAleatorio", valor);
  }, [mAleatorio]);




  //Fazendo uma referencia para uma tag em html 
  // => '<audio ref = {audioPlayer} src={audio} />' 
  // teria o mesmo resultado parecido com document.querySeletor(tag) mas usando o react teria resultado diferente
  const audioPlayer = useRef();
  const progressBar = useRef();

  const [isPlaying, setIsPlaying] = useState(() => {
    return JSON.parse(localStorage.getItem("isPlaying")) || false;
  });

  // Tempo atual da música

  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = convertPraSegundos(duracao)


  const playPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying); // Inverter o estado de 'isPlaying'
  };

  // salvando a musica tocando
  useEffect(() => {
    const valor = JSON.stringify(isPlaying)
    localStorage.setItem("isPlaying", valor);
  }, [isPlaying]);


  useEffect(() => {
    // Quando mudar o ID da música, resetar o estado e tocar automaticamente
    if (audioPlayer.current) {
      audioPlayer.current.load(); // Carrega o novo áudio
      audioPlayer.current.play(); // Toca automaticamente
      setIsPlaying(true);
    }
  }, [idMusica]); // O efeito será acionado sempre que o ID mudar


//   Método chamado useEffectSnippet: limpa variáveis de estado automaticamente 
// Usando requestAnimationFrame() para melhor desempenho
  useEffect(() => {
    let animationFrameId;

    const updateTime = () => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
        progressBar.current.style.setProperty(
          "--_progress",
          (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
        );
      }
      animationFrameId = requestAnimationFrame(updateTime);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(updateTime);
    }

    return () => cancelAnimationFrame(animationFrameId);// Limpa o intervalo quando o componente for desmontado
  }, [isPlaying, durationInSeconds]);// Dependências: executa quando `isPlaying` ou `durationInSeconds` mudam




  return (
    <div className='player'>

      <div className='player__controllers'>

        {/* Botaões de controle da musica */}
        <FontAwesomeIcon className='player__icon' icon={faRepeat} />

        {/* Botaões de controle da musica */}
        <Link to={`/song/${mudarMusica(idMusica, 'voltar')}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className='player__icon--play player__icon' icon={isPlaying ? faCirclePause : faCirclePlay} onClick={() => playPause()} />

        <Link to={`/song/${mudarMusica(idMusica, 'seguir')}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </Link>

        {/* O bota de aleatorio esta funcionando inicialmente falta adicionar o tamanho do array de referencia e muda o estado dos valores de proceguir e voltar por ele esta ativo 
  
        */}
        <div onClick={() => { setmAleatorio(!mAleatorio) }}>
          <FontAwesomeIcon className={mudarClassBt(mAleatorio, 'player__icon', 'player__icon--selecao')} icon={faShuffle} />

        </div>



      </div>

      <div className='player__progress'>

        {/* Tempo inicial */}
        <p>{currentTime}</p>

        {/* Barra de progresso */}
        <div className='player__bar'>
          <div ref={progressBar} className='player__bar-progress'> </div>
        </div>

        {/* Tempo final */}
        <p>{duracao}</p>



      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>

  )
}
Player.propTypes = {
  duracao: PropTypes.string,
  idMusica: PropTypes.number,
  artist: PropTypes.string,
  audio: PropTypes.string,
}

export default Player