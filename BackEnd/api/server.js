/* 
    POST = enviar - GET = pegar - PUT = atualizar - DELETE = deletar

    Entrar no caminho do servidor  
        cd ./BackEnd/api 
        node --watch server.js << assim com --watch sera reiniciado automatico meu servidor

    Usar um banco de dados Mongo.db"
*/

/*
    O Express é usado para construir back-ends e APIs REST que podem ser consumidos por front-ends como Angular, React ou Vue.js.

    Ele é equivalente ao Flask no Python, ou seja, é uma camada que facilita a comunicação entre um banco de dados e um front-end.
*/

import express from "express";
import cors from "cors"
import { bancoDb } from "./connect.js";


// crio meu aplicativo que receberar todas tecnologia do express
const app = express();

// confg da porta de retorno dessa api
const PORT = 5001;

/* 
Confg do app:
    Middleware - resolve problema de dominio atua entre a escuta e resposta
*/
app.use(cors());
// app.use(express.json());

// Quando essa API receber uma requisição do tipo 'GET'
// ira rodar essa função
// Resumindo quando o endPoint '/' receber a requisicao tipo 'GET' nessa rota ira rodar essa funcao 
// vou receber uma requisicao e enviar uma resposta

app.get("/", (request, response) => {
    response.send('Paginas Artists/Songs')
});

// await = espera algo terminar de acontecer depois executa
// async = quando estiver usando o await dentro de uma função preciso chamar essa funcao de assincrona const = async() => {}

// Servidor olhando para tabela de ARTISTAS
app.get("/artists", async (request, response) => {
    response.send(await bancoDb.collection("artists").find({}).toArray())
});

// Servidor olhando para tabela de SONS
app.get("/songs", async (request, response) => {
    try {

        // response.send(await bancoDb.collection("songs").find({}).toArray())

        // // Converte o cursor em um array
        const songs = await bancoDb.collection("songs").find({}).toArray(); 
        response.json(songs); // Agora é seguro enviar como JSON

    } catch (error) {
        response.status(500).json({ error: "Erro ao buscar as músicas" });
    }
});




// O servidor estuta só o que vem da porta confg
app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`)
})