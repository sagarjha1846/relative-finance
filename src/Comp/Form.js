import React, { useState } from "react";
import logo from "../asset/images/box-small.png";
import vector from "../asset/images/box-vector.png";
import comp from "../asset/images/comp.jpg";
function Form() {
  const [inputData, setInputData] = useState({
    token_one: "",
    token_two: "",
    start_date: "",
    end_date: "",
    deposit: "",
  });
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      inputData.token_one !== "" &&
      inputData.token_two !== "" &&
      inputData.start_date !== "" &&
      inputData.end_date !== "" &&
      inputData.deposit !== ""
    ) {
      setData([
        ...data,
        {
          token_01: inputData.token_one,
          token_02: inputData.token_two,
          start_date: inputData.start_date,
          end_date: inputData.end_date,
          deposit: inputData.deposit,
        },
      ]);
      setInputData({
        token_one: "",
        token_two: "",
        start_date: "",
        end_date: "",
        deposit: "",
      });
    } else {
      alert("enter Valid Data");
    }
  };

  console.log(data);

  return (
    <div className="form">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Create Multi User Lot</h1>
      </div>
      <form>
        <div className="field">
          <div className="float">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="input-field">
            <label>Token 01</label>
            <select
              value={inputData.token_one}
              name="token_one"
              onChange={handleChange}
            >
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Matic">Matic</option>
              <option value="BNB">BNB</option>
              <option value="Tether">Tether</option>
            </select>
          </div>
          <div className="input-field img">
            <img src={comp} alt="" />
          </div>
          <div className="input-field">
            <label>Token 01</label>
            <select
              value={inputData.token_two}
              name="token_two"
              onChange={handleChange}
            >
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Matic">Matic</option>
              <option value="BNB">BNB</option>
              <option value="Tether">Tether</option>
            </select>
          </div>
        </div>
        <div className="field">
          <div className="float">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="input-field">
            <label>Starts On</label>
            <input
              name="start_date"
              value={inputData.start_date}
              onChange={handleChange}
              placeholder="1000"
              type="datetime-local"
            ></input>
          </div>

          <div className="input-field">
            <label>Lot Duration</label>
            <input
              placeholder="1000"
              value={inputData.end_date}
              name="end_date"
              onChange={handleChange}
              type="datetime-local"
            ></input>
          </div>
        </div>
        <div className="field">
          <div className="float">
            <i class="fas fa-info-circle"></i>
          </div>
          <div className="input-field">
            <label>Initial Deposit</label>
            <input
              name="deposit"
              value={inputData.deposit}
              placeholder="1000"
              onChange={handleChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className=" btn">
          <button onClick={handleClick}>
            <img src={vector} alt="lgag" />
            <p>Create Lot</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
