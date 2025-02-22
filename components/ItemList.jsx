import SingleItem from './SingleItem';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// Link => melhor performace que <a>
// useLocation => para mostrar qual url esta ativa

/* props - pego todas as variaveis criadas */

const ItemList = ({ title, item, itemArray, path, idPath }) => {

  const { pathname } = useLocation(); // processo de desestruturação
  const isHome = pathname === '/';
  // se estiver na home continuo com o valor recuperado caso contrario passo um valor infinito
  const finalItems = isHome ? item : Infinity


  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2> {title} populares </h2>

        { isHome ? (          
          <Link to={path} className="item-list__hlink">Mostrar tudo</Link>
        )
        :(
        <></>
      )}

      </div>

      <div className='item-list__container'>

        {
          // Adicionando um array dinamico para ser preenchido por qualquer coisa
          itemArray.filter((_, index) => index < finalItems)
            .map((valorCorr, chave) => (

              // Adicionamos a key usado como key 
              // para garantir que cada <SingleItem /> tenha um identificador único.
              <SingleItem

                // Espalhando as propriedades do objeto `valorCorr` como props
                // Isso evita a necessidade de escrever manualmente: nome={valorCorr.nome} genero={valorCorr.genero} idade={valorCorr.idade}
                {...valorCorr}
                idPath={idPath}
                key={`${title}_${chave}`} />

            ))}

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
  path: PropTypes.string,
  idPath: PropTypes.string,
  item: PropTypes.number,
  itemArray: PropTypes.array,
};

export default ItemList


