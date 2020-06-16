import React from 'react';
import Modal from 'react-modal';
import Unsplash from 'react-unsplash-wrapper';

Modal.setAppElement('#___gatsby');

const style = {
  content: {
    top: '30%',
    left: '17%',
    right: 'auto',
    bottom: 'auto',
    padding: '1px',
    borderRadius: '12px',
    background: 'transparent',
    border: '',
  },
  overlay: {
    backgroundColor: 'transparent',
  },
};

const CatGenerator = ({ isOpen }) => {
  return (
    <Modal style={style} isOpen={isOpen}>
      <Unsplash style={{ borderRadius: '12px' }} width="100" height="100" keywords="cat" />
    </Modal>
  );
};

export default CatGenerator;
