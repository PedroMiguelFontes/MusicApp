import axios from 'axios';

const API_KEY = 'f980535c99eb438eace6610f01098044';
const API_BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

import axios from 'axios';

const lastfm = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    format: 'json',
  },
});

export const searchTrack = (track) => {
  return lastfm.get('', {
    params: {
      method: 'track.search',
      track,
    },
  });
};

export const getTrackInfo = (artist, track) => {
  return lastfm.get('', {
    params: {
      method: 'track.getInfo',
      artist,
      track,
    },
  });
};