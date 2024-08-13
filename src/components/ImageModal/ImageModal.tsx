import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
type ImageModal = {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
};
interface ImageModalProps {
  images: ImageModal;
  modalIsOpen: boolean;
  closeModal: () => void;
}
const ImageModal: React.FC<ImageModalProps> = ({
  images,
  modalIsOpen,
  closeModal,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.Modal}
        overlayClassName={css.Overlay}
      >
        <img
          className={css.ModalImg}
          src={images.urls.regular}
          alt={images.alt_description}
        />
      </Modal>
    </div>
  );
};
export default ImageModal;
