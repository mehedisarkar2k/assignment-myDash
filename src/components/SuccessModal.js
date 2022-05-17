import Modal from "./Modal";

const SuccessModal = ({ handleModal }) => {
    return (
        <Modal>
            <div className="">
                <p>Account created successfully!</p>

                <button className="button" onClick={() => handleModal(false)}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default SuccessModal;
