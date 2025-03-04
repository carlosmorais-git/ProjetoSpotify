// Conexao com MongoDb 
// ******* parte responsável por conectar com meu banco de dados 
import { MongoClient } from "mongodb"

const URI = "mongodb+srv://carlosmorais:mjuWMPfTpqa47uO6@cluster0.oqjgs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Caminho de onde meu banco de dados ira escutar
const Cliente = new MongoClient(URI);

// Conexao do meu banco de dados e exportação
export const bancoDb = Cliente.db('spotifyAula');

