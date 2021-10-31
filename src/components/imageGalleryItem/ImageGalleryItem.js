import s from './ImageGalleryItem.module.css';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

function ImageGalleryItem  ({ 
  id,
  previewImg,
  tags,
  onToggleModal,
  showModal,
  modalImage,
  onImgClick,
  largeImgURL,
}) {
  return (
    <>
    <li className={s.ImageGalleryItem} key={id}>
      <img
        data-img={largeImgURL}
        src={previewImg}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={onImgClick}
      />
    </li>
     {showModal && (
       <Modal modalImage={modalImage} onToggleModal={onToggleModal} tags={tags} />
     )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  previewImg: PropTypes.string,
  tags: PropTypes.string,
  onToggleModal: PropTypes.func,
  showModal: PropTypes.bool,
  modalImage: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;