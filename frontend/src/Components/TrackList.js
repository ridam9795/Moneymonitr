import React, { useCallback, useMemo, useRef, useState } from "react";
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
import TrackCard from "./TrackCard";

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
  const categoryRef = useRef(null);
  const currencyRef = useRef(null);
  const amountRef = useRef(null);
  const [expenseList, setExpenseList] = useState([]);
  const [investmentList, setInvestmentList] = useState([]);
  const [billList, setBillList] = useState([]);
  const [emiList, setEmiList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const updateList = (data) => {
    const currCat = props.name;
    if (currCat == "Expense") {
      setExpenseList([...expenseList, data]);
    } else if (currCat == "Investment") {
      setInvestmentList([...investmentList, data]);
    } else if (currCat == "Bill") {
      setBillList([...billList, data]);
    } else if ((currCat = "EMI")) {
      setEmiList([...emiList, data]);
    }
  };
  const getCurrertList = () => {
    const currCat = props.name;
    if (currCat == "Expense") {
      return expenseList;
    } else if (currCat == "Investment") {
      return investmentList;
    } else if (currCat == "Bill") {
      return billList;
    } else if (currCat == "EMI") {
      return emiList;
    }
  };

  const handleSave = () => {
    const category = categoryRef.current.value;
    const currency = currencyRef.current.value;
    const amount = amountRef.current.value;
    const date = new Date();

    let data = {
      category: category,
      currency: currency,
      amount: amount,
      date: date,
    };

    updateList(data);
    closeModal();
  };
  return (
    <div>
      <div>
        <h2 className="heading">Track your {props.name}</h2>

        <Button color="primary" onClick={openModal}>
          Add {props.name}
        </Button>
      </div>
      {getCurrertList().map((item, index) => {
        return (
          <div key={index} className="itemList">
            <TrackCard
              category={item.category}
              currency={item.currency}
              amount={item.amount}
              date={item.date}
            />
          </div>
        );
      })}
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
                <Input type="text" innerRef={categoryRef} />
              </FormGroup>
              <FormGroup>
                <Label for="currency">Select Currency</Label>
                <Input
                  type="select"
                  name="select"
                  id="currency"
                  innerRef={currencyRef}
                >
                  <option>inr</option>
                  <option>dollar</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Amount</Label>
                <Input type="number" innerRef={amountRef} />
              </FormGroup>
              <FormGroup style={{ justifyContent: "center" }}>
                <Button color="success" block onClick={handleSave}>
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
