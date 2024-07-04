import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import RotatingLines from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

import FetchImage from '../image-api.js';
import { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [img, setImg] = useState('');
  const [page, setPage] = useState(1);

  async function handleSubmit(newImg) {
    setImages([]);
    setPage(1);
    setImg(newImg);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (img === '') {
      return;
    }
    async function newPage() {
      try {
        setError(false);
        setLoading(true);
        const data = await FetchImage(img, page);
        console.log('🚀 ~ newPage ~ data:', data);
        setImages(prevImage => {
          return [...prevImage, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    newPage();
  }, [img, page]);

  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      <ImageGallery images={images} />
      {loading && <RotatingLines />}
      {error && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal images={images} />
    </>
  );
}
