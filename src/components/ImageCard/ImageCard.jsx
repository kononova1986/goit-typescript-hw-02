export default function ImageCard({ images }) {
  const {
    description,
    urls: { small },
  } = images;
  return (
    <div>
      <img
        style={{ height: '180px', width: '300px', objectFit: 'cover' }}
        src={small}
        alt={description}
      />
    </div>
  );
}
