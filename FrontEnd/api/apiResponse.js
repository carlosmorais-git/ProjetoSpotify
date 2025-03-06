// Fetch ou Axios
// axios => permite eu fazer qualquer tipo de requisicao 
import axios from "axios";

const URL = "http://localhost:5001";//porta do servidor
const respostaArtists = await axios.get(`${URL}/artists`);
const respostaSongs = await axios.get(`${URL}/songs`);

// Array recuperado do meu back-end via API
export const artistArray = respostaArtists.data;
export const songsArray = respostaSongs.data;
