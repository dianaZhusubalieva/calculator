import React, { useState } from "react";
import "./styles.scss";
const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [total, setTotal] = useState(0);

  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTotal, setNewTotal] = useState(0);
  const [differences, setDifferences] = useState(0);

  const [toggle, setToggle] = useState(false);

  const calculate = () => {
    const dateForCalculate = new Date();
    const year = dateForCalculate.getUTCFullYear();
    const month = dateForCalculate.getUTCMonth() + 1;

    const date2 = +date.substring(0, 4) * 12 + +date.substring(5, 7);

    let differenceOfMonthes = date2 - (year * 12 + month);
    let totalResult = Math.round(+amount / differenceOfMonthes);
    setTotal(totalResult);
  };

  const calculate2 = () => {
    const dateForCalculate2 = new Date();
    const year2 = dateForCalculate2.getUTCFullYear();
    const month2 = dateForCalculate2.getUTCMonth() + 1;

    const date3 = +newDate.substring(0, 4) * 12 + +newDate.substring(5, 7);

    let differenceOfMonthes = date3 - (year2 * 12 + month2);
    let totalResult = Math.round(+newAmount * differenceOfMonthes);
    setNewTotal(totalResult);
    setDifferences(differenceOfMonthes);
  };

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    setToggle(isChecked);
    setAmount("");
    setDate("");
    setNewAmount("");
    setNewDate("");
    setTotal(0);
    setNewTotal(0);
  };

  return (
    <div className="container">
      <div className="first_block">
        <span className="first">Savings</span>
        <span className="second">calculator</span>
        <div className="toggle">
          <div class="container1">
            <input
              type="checkbox"
              id="toggle-button"
              class="toggle-button"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {toggle ? (
              <label for="toggle-button" class="text">
                calculate by total amount
              </label>
            ) : (
              <label for="toggle-button" class="text">
                calculate by monthly saving
              </label>
            )}
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="forms_block">
          <div className="form">
            <label>total amount</label>
            <div class="form-group">
              <span>$</span>
              <input
                value={amount}
                class="form-field"
                type="number"
                placeholder="25,000"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="form">
            <label>date</label>
            <div class="form-group">
              <span></span>
              <input
                value={date}
                class="form-field"
                type="month"
                required="required"
                min="2022-01"
                max="2030-12"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="last_block">
            <div className="monthly_amount">
              <span>total amount</span>
              <span className="amount">{total} $</span>
            </div>

            <div className="text_under">
              {total ? (
                <p>
                  You are planning <strong>{differences} monthly</strong>{" "}
                  deposits to reach your <strong>${amount}</strong> goal by
                  <strong> {date}</strong>.
                </p>
              ) : (
                ""
              )}
            </div>
            <button onClick={calculate} style={{ cursor: "pointer" }}>
              Finish
            </button>
          </div>
        </div>
      ) : (
        <div className="forms_block">
          <div className="form">
            <label>monthly saving</label>
            <div class="form-group">
              <span>$</span>
              <input
                class="form-field"
                type="number"
                placeholder="25,000"
                onChange={(e) => setNewAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="form">
            <label>date</label>
            <div class="form-group">
              <span></span>
              <input
                class="form-field"
                type="month"
                required="required"
                min="2022-01"
                max="2030-12"
                onChange={(e) => setNewDate(e.target.value)}
              />
            </div>
          </div>
          <div className="last_block">
            <div className="monthly_amount">
              <span>Monthly amount</span>
              <span className="amount">{newTotal} $</span>
            </div>

            <div className="text_under">
              {newTotal ? (
                <p>
                  You are saving <strong>{differences} monthly </strong>
                  to save <strong>${newAmount}</strong> by
                  <strong> {newDate}</strong>.
                </p>
              ) : (
                ""
              )}
            </div>

            <button onClick={calculate2} style={{ cursor: "pointer" }}>
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
