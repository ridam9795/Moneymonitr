import React, { useState } from "react";
import Modal from "react-modal";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
} from "reactstrap";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "50%",
    minHeight: "50%",
    backgroundColor: "#3e4540",
    color: "white",
    justifyContent: "center",
  },
};
function TrackList(props) {
  console.log("track", props);
  const [itemList, setItemList] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleClick = () => {};
  return (
    <div>
      <div>
        <h2 className="heading">Track your {props.name}</h2>

        <Button color="primary" onClick={openModal}>
          Add {props.name}
        </Button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div>
            <h3 className="modal-heading">Add {props.name}</h3>

            <Form>
              <FormGroup>
                <Label>Category Name</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label for="currency">Select Currency</Label>
                <Input type="select" name="select" id="currency">
                  <option>inr</option>
                  <option>dollar</option>
                  <option>yen</option>
                  <option>euro</option>
                  <option>Egyptian pound</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Amount</Label>
                <Input type="number" />
              </FormGroup>
              <FormGroup style={{ justifyContent: "center" }}>
                <Button color="success" block>
                  Save
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TrackList;
