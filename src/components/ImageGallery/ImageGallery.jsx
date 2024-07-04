import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal, setDataImage }) {
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
}
