
import axios from "axios";

const key = '23250657-60999439b4e5e927be309f9a4';
axios.defaults.baseURL = "https://pixabay.com/api/";
const params = "image_type=photo&orientation=horizontal&per_page=12";

async function fetchPixabayImgs(query, page) {
  const {
    data: { hits },
  } = await axios.get(`?&q=${query}&page=${page}&key=${key}&${params}`);
  return hits;
}

export default fetchPixabayImgs;