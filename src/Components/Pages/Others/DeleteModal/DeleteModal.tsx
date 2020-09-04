import * as React from "react";
import Modal from "react-bootstrap/esm/Modal";

export interface DeleteModalProps {
  onHide: () => void;
  onShow: boolean;
  rowID: string;
  onDelete: (rowID: string) => void;
}

export interface DeleteModalState {
  showModal: boolean;
}

class DeleteModal extends React.Component<DeleteModalProps, DeleteModalState> {

  render() {
    return (
      <div>
        <Modal
          show={this.props.onShow}
          onHide={this.props.onHide}
        >
          <Modal.Body>
            <h6>
              Are sure to delete this record????
            </h6>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-danger"
              onClick={this.props.onHide}
            >
              Close
            </button>
            <button
              className="btn btn-success"
              onClick={() => { this.props.onDelete(this.props.rowID) }}
            >
              Applybhdfhh
              
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;
