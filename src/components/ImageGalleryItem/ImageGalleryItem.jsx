import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

export function ImageGalleryItem({ id, src, largeIMG }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeURL, setLargeURL] = useState('');

  const closeESC = () => {
    setIsModalOpen(!true);
  };

  const openModal = largeURL => {
    setIsModalOpen(!false);
    setLargeURL(largeURL);
  };

  const closeModal = e => {
    if (e.target.className === 'overlay') {
      setIsModalOpen(!true);
    }
  };

  return (
    <div>
      <li className="gallery-item" key={id} onClick={() => openModal(largeIMG)}>
        <img src={src} alt="" />
      </li>

      {isModalOpen && largeURL !== undefined && (
        <Modal state={closeModal} close={closeESC}>
          <img className="large-img" src={largeURL} alt="" />
        </Modal>
      )}
    </div>
  );
}

// export class ImageGalleryItem extends Component {
//   state = { isModalOpen: false, largeURL: '' };

// closeESC = () => {
//   this.setState({ isModalOpen: !true });
// };

//   openModal = largeURL => {
//     this.setState({ isModalOpen: !false, largeURL });
//   };

//   closeModal = e => {
//     if (e.target.className === 'overlay') {
//       this.setState({ isModalOpen: !true });
//     }
//   };

//   render() {
// return (
//   <div>
//     <li
//       className="gallery-item"
//       key={this.props.id}
//       onClick={() => this.openModal(this.props.largeIMG)}
//     >
//       <img src={this.props.src} alt="" />
//     </li>

//     {this.state.isModalOpen && this.state.largeURL !== undefined && (
//       <Modal state={this.closeModal} close={this.closeESC}>
//         <img className="large-img" src={this.state.largeURL} alt="" />
//       </Modal>
//     )}
//   </div>
// );
//   }
// }

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  largeIMG: PropTypes.string,
};
