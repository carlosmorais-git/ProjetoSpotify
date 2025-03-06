import 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



const SongItem = ({ image,name,duration,index,_id}) => {
    
 
    return (<>
        {/* Linha da lista */}
        <Link to={`/song/${_id}`} className='song-item'> 

            {/* Os 3 primeiros valores agrupados */}
            
            <div className='song-item__number-album'>
                <p className='song-index__number-album'>{index}</p>
                {/* Bloco album */}
                <div className='song-item__album'>
                    <img src={image} alt="Imagem" className='song-item__image' />                    
                    <p className='song-item__name'>{name}</p>
                </div>
            </div>

            <p>{duration}</p>
        </Link>
    </>



    )
}
SongItem.propTypes = {
    image:PropTypes.string,
    name:PropTypes.string,
    duration:PropTypes.string,
    _id:PropTypes.string,
    index:PropTypes.string,
    artist:PropTypes.string,
};

export default SongItem