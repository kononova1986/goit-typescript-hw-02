import { ImgPhoto } from '../../App';
interface ImageCardProps {
  images: ImgPhoto;
  modalOpened: () => void;
  setDataImage: (data: ImgPhoto) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({
  images,
  modalOpened,
  setDataImage,
}) => {
  const {
    alt_description,
    urls: { small },
  } = images;

  const handleImageClick = () => {
    setDataImage(images);
    modalOpened();
  };
  return (
    <div>
      <img
        style={{ height: '180px', width: '300px', objectFit: 'cover' }}
        src={small}
        alt={alt_description}
        onClick={handleImageClick}
      />
    </div>
  );
};
export default ImageCard;
