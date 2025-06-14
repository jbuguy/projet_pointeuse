import {createPortal} from "react-dom"
export default function Modal({ isOpen, onClose, children }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    if (!isOpen) return null;
    return createPortal(
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
}
