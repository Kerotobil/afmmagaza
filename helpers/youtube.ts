import axios from 'axios';
import cheerio from 'cheerio';

const youtubeUrlRegexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
const youtubeIdRegexp = /^.{11}$/;
const youtubeBaseUrl = 'https://www.youtube.com/watch?v=';

export function youtubeId(urlOrId: string) {

  if (youtubeIdRegexp.test(urlOrId)) {
    return urlOrId;
  }

  youtubeUrlRegexp.lastIndex = 0;
  const found = youtubeUrlRegexp.exec(urlOrId);
  if (found === null) return null;

  return found.pop();
}

export function youtubeThumbnail(id: string) {
  if (~id.indexOf('.')) {
    id = youtubeId(id);
  }
  if (!id) return null;

  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}

export function youtubeUrl(urlOrId: string) {
  const id = youtubeId(urlOrId);
  if (!id) return null;

  return `https://www.youtube.com/watch?v=${id}`;
}

export async function youtubeTitle(urlOrId: string) {
  const url = youtubeUrl(urlOrId);
  if (!url) return null;

  const response = await axios.get(url);
  const $ = await cheerio.load(response.data);
  const title = $('title').text().replace(/ \- YouTube$/i, '');
  return title;
}
