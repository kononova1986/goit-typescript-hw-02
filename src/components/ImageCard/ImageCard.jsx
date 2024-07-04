export default function ImageCard({ images, modalOpened, setDataImage }) {
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
}
