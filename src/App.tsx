import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import RotatingLines from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';

import FetchImage from '../image-api.js';
import { useState, useEffect } from 'react';
import ImageModal from './components/ImageModal/ImageModal.jsx';
import { ImgPhoto } from '../image-api.js';
export default function App() {
  const [images, setImages] = useState<ImgPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [img, setImg] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [dataImage, setDataImage] = useState<ImgPhoto>({
    id: '',
    urls: { small: '', regular: '' },
    alt_description: '',
  });
  async function handleSubmit(newImg: string) {
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
        const data: any = await FetchImage(img, page);
        console.log('🚀 ~ newPage ~ data:', data.results);
        setImages(prevImage => {
          return [...prevImage, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    newPage();
  }, [img, page]);
  const toggleModalOpen = (): void => {
    setIsOpen(prevImage => !prevImage);
  };
  return (
    <>
      <SearchBar onSearch={handleSubmit} />
      <ImageGallery
        images={images}
        openModal={toggleModalOpen}
        setDataImage={setDataImage}
      />
      {loading && <RotatingLines />}
      {error && <ErrorMessage />}
      {images && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        images={dataImage}
        closeModal={toggleModalOpen}
      />
    </>
  );
}
