import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleItem = ({ _id, image, name, artist, idPath }) => {
  let nameBrackpoint = idPath.replace("/", "--");
  return (
    <Link to={`${`${idPath}/${_id}`}`} className={`single-item single-item${nameBrackpoint || ''}`}>
      <div className= 'single-item__div-image-button'>
        <div className= { idPath === '/song' ? 'single-item__div-image--song' : 'single-item__div-image'} >
          <img className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`} />
        </div>
        <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
      </div>
      <div className='single-item__texts'>
        <p className='single-item__title single-item__2lines'>{name}</p>
        <p className='single-item__type'>{artist ?? 'Artista'}</p>
      </div>

    </Link>
  );
};
SingleItem.propTypes = {
  _id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  idPath: PropTypes.string.isRequired,

};

export default SingleItem
