
// Os dados para inserir
import {artistArray} from "../../FrontEnd/src/assets/database/artists.js";
import {songsArray} from "../../FrontEnd/src/assets/database/songs.js";
import { bancoDb } from "./connect.js";

// Irar retornar uma lista com cada item de sua lista sera um objeto

// [ LISTA
//     {'nome':'nome1','id': 123,},     OBJETO
//     {'nome':'nome2','id': 1212453,}, OBJETO
//     {'nome':'nome3','id': 12323,},   OBJETO
//     {'nome':'nome4','id': 15323,},   OBJETO
// ]

const newArtists = artistArray.map((valor)=>{
    const objArtist = {...valor}; // Listo todos valores
    delete objArtist.id; // Deleto o id
    return objArtist;
})
const newSongs = songsArray.map((valor)=>{
    const objSongs = {...valor};// Listo todos valores
    delete objSongs.id;// Deleto o id
    return objSongs;
})


/* 
Comandos BD:

    await = espera algo terminar de acontecer depois executa
    async = quando estiver usando o await dentro de uma função preciso chamar essa funcao de assincrona const = async() => {}

    .find({}) = pegar toda minha tabela
    .toArray() = converte para um array
    .insertMany(array) = inserir varios dados de uma vez
    .insertOne(array) = inserir um valor por vez

*/


// // Enviar dados para meu banco no MongoDB

// const responseSongs = await bancoDb.collection('songs').insertMany(newSongs)
// const responseArtists = await bancoDb.collection('artists').insertMany(newArtists)

// const songCollection = await bancoDb.collection("songs").find({}).toArray();
// const array = await bancoDb.collection("songs").insertOne(array);