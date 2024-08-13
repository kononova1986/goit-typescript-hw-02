import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImgPhoto } from '../../App';
interface ImageGalleryProps {
  images: ImgPhoto[];
  openModal: () => void;
  setDataImage: (data: ImgPhoto) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openModal,
  setDataImage,
}) => {
  return (
    <ul className={css.list}>
      {images &&
        images.map(img => (
          <li className={css.item} key={img.id}>
            <ImageCard
              images={img}
              modalOpened={openModal}
              setDataImage={setDataImage}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
