import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalConfirm = (props) => {

    const { show, handleClose, dataUserDelete } = props

    const handleConfrimDelete = () => {

    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='add-new'>
                        <p>Are you sure delete this user, this action can't be undone!</p>
                        <p>Do you want to delete this user?</p>
                        <p><b>Email: {dataUserDelete.email}</b></p>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleConfrimDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default ModalConfirm
