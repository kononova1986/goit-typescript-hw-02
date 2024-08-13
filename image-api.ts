import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/';
export interface ImgPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}
export default async function FetchImage(
  img: string,
  currentPage: number
): Promise<ImgPhoto> {
  const { data } = await axios.get<ImgPhoto>('/search/photos', {
    params: {
      client_id: 'JB-j9TEU1bRkcm15slIO2JI8TqL5-MjHzde3VnQXA8k',
      query: img,
      page: currentPage,
      per_page: 12,
    },
  });

  return data; // ошибка была возвращать data.results
}
