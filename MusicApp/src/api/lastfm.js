import axios from 'axios';

const API_KEY = 'f980535c99eb438eace6610f01098044';
const API_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

// Função para buscar músicas populares de um artista
export async function fetchTopTracks(artistName) {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        method: 'artist.gettoptracks',
        artist: artistName,
        api_key: API_KEY,
        format: 'json',
      },
    });

    if (response.data && response.data.toptracks) {
      return response.data.toptracks.track; // Retorna a lista de músicas
    } else {
      throw new Error('No tracks found');
    }
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    throw error;
  }
}