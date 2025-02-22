import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'


const Player = () => {
  return (
    <div className='player'>

      <div className='player__controllers'>

        {/* Botaões de controle da musica */}
        <Link>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon className='player__icon--play' icon={faCirclePlay} />
        <Link>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
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
        <p>03:45</p>



      </div>
    </div>

  )
}

export default Player