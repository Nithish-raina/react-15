import React, { useState } from "react";
// import { RiCloseLine } from "react-icons/ri";
import { RxCrossCircled } from 'react-icons/rx'
const Modal = ({ setIsOpen, addPerson }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const handleAdd = () => {
    // console.log("Confirm btn clicked");
    setIsOpen(false);
    addPerson({ name : name, age : age});
  }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered" >
        <div className="modal" >
          <div className="modalHeader" >
            <h5 className="heading">Add Person </h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RxCrossCircled style={{color:"white"}}/>
          </button>
          <div className="modalContent">
            <label className="heading">Name</label>
            <input type="text" value={name} placeholder="Name here" onChange={(e) => setName(e.target.value) }/>
            <label className="heading">Age</label>
            <input type="text" value={age} placeholder="Age here" onChange={(e) => setAge(e.target.value) } />
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={handleAdd}>
                Confirm
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;