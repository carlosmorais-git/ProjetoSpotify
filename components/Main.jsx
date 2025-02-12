import ItemList from './ItemList'
const Main = () => {
  return (
    <div className="main">
        {/* Lista Artista */}
        <ItemList title = 'Artista'/>

         {/* Lista de Musicas */}
        <ItemList title = 'Musicas'/>   

    </div>
  );
};

export default Main