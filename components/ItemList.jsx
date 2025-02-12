import SingleItem from './SingleItem';
import PropTypes from 'prop-types';
/* props - pego todas as variaveis criadas */

const ItemList = ({ title }) => {
  return (
     <div className="item-list">
              <div className="item-list__header">
                  <h2> {title} populares</h2>
                  <a href="/">Mostrar tudo</a>
              </div>
    
              <div className='item-list__container'>
    
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
                <SingleItem />
    
              </div>
    
          </div>
  );
};

/* 
use essa importacao >> import PropTypes from 'prop-types';
quando passo o .isRequired ele espera obrigatoriamente receber 
um valor se nao passar ele fica opcional */

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemList
