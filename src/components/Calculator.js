import '../css/calculator.css';
import React from 'react';

function Calculator() {
  return (
    <div>
      <div className="main-container">
        <div className="screen">0</div>

        <input className="all-btn" id="AC-btn" type="button" value="AC" />

        <input
          className="all-btn"
          id="plus-or-minus-btn"
          type="button"
          value="+/-"
        />

        <input className="all-btn" id="percent-btn" type="button" value="%" />

        <input
          className="orange-btn all-btn"
          id="division-btn"
          type="button"
          value="÷"
        />

        <input className="all-btn" id="seven-btn" type="button" value="7" />

        <input className="all-btn" id="eight-btn" type="button" value="8" />

        <input className="all-btn" id="nine-btn" type="button" value="9" />

        <input
          className="orange-btn all-btn"
          id="multiply-btn"
          type="button"
          value="x"
        />

        <input className="all-btn" id="four-btn" type="button" value="4" />

        <input className="all-btn" id="five-btn" type="button" value="5" />

        <input className="all-btn" id="six-btn" type="button" value="6" />

        <input
          className="orange-btn all-btn"
          id="minus-btn"
          type="button"
          value="-"
        />

        <input className="all-btn" id="one-btn" type="button" value="1" />

        <input className="all-btn" id="two-btn" type="button" value="2" />

        <input className="all-btn" id="three-btn" type="button" value="3" />

        <input
          className="orange-btn all-btn"
          id="add-btn"
          type="button"
          value="+"
        />

        <input className="all-btn" id="zero-btn" type="button" value="0" />

        <input className="all-btn" id="dot-btn" type="button" value="·" />

        <input
          className="orange-btn all-btn"
          id="equal-btn"
          type="button"
          value="="
        />
      </div>
    </div>
  );
}

export default Calculator;
