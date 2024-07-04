import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.list}>
      {images.map(img => (
        <li className={css.item} key={img.id}>
          <a onClick={openModal}>
            <ImageCard images={img} />
          </a>
        </li>
      ))}
    </ul>
  );
}
