import ModalFormQuote from "./ModalFormQuote";

const Modal = ({ setShowModal, page }) => {
  return (
    <>
      <div className="mfp-bg">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Get your quote</h1>
              <button
                onClick={() => setShowModal((p) => !p)}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                x
              </button>
            </div>
            <div className="mpf-iframe">
              <ModalFormQuote />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
