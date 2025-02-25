import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep,faShuffle  } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Player = ( {duracao,idMusica} ) => {
  return (
    <div className='player'>

      <div className='player__controllers'>

        {/* Botaões de controle da musica */}
        <Link to={`/song/${parseInt(idMusica) - 1 === 0 ? 1 : parseInt(idMusica) - 1}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon className='player__icon--play' icon={faCirclePlay} />

        <Link to={`/song/${parseInt(idMusica) + 1 === 11 ? 10 : parseInt(idMusica) + 1}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
        </Link>

        {/* O bota de aleatorio esta funcionando inicialmente falta adicionar o tamanho do array de referencia e muda o estado dos valores de proceguir e voltar por ele esta ativo 
        
        Trasicao de classes de estilos 
          - player__icon pra nao selecionado 
          - player__icon--selecao selecionado modo aleatorio
  
        */}
        
        <Link to={`/song/${parseInt(Math.random()*100)}`}>
        <FontAwesomeIcon className='player__icon--selecao'  icon={faShuffle} />
        </Link>

      </div>

      <div className='player__progress'>

        {/* Tempo inicial */}
        <p>00:46</p>

        {/* Barra de progresso */}
        <div className='player__bar'>
          <div className='player__bar-progress'> </div>
        </div>

        {/* Tempo final */}
        <p>{ duracao }</p>



      </div>
    </div>

  )
}
Player.propTypes = {
  duracao:PropTypes.string,
  idMusica:PropTypes.number,
}

export default Player