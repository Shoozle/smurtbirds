interface ModalProps {
    imgLoc: string;
    onClose: () => void;
}

const Modal = ({ imgLoc, onClose }: ModalProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center cursor-zoom-out xs:p-0 sm:p-16" onClick={onClose}>
            <img src={imgLoc} alt="Modal" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
    )
}

export default Modal;