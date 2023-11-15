import { ModalClose } from '../../assets/svgs';
import { ModalCon } from './styles';
import { useEffect, useRef } from 'react';

const Modal = ({ children, closeModal, heading, editing }) => {
	const modalRef = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				closeModal();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [closeModal]);

	return (
		<ModalCon>
			<div ref={modalRef} className="modal--content">
				<header>
					{heading && <h1>{heading}</h1>}
					{editing && (
						<p>
							This event was created on - <span>Sept. 16, 2022</span>
						</p>
					)}
					<ModalClose onClick={() => closeModal()} />
				</header>
				{children}
			</div>
		</ModalCon>
	);
};

export default Modal;
