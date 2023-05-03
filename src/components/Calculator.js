import '../css/calculator.css';
import React from 'react';
import Button from './Buttons';

function Calculator() {
  return (
    <div>
      <div className="main-container">
        <div className="screen">0</div>

        <Button className="all-btn" id="AC-btn" value="AC" />

        <Button className="all-btn" id="plus-or-minus-btn" value="+/-" />

        <Button className="all-btn" id="percent-btn" value="%" />

        <Button className="orange-btn all-btn" id="division-btn" value="÷" />

        <Button className="all-btn" id="seven-btn" value="7" />

        <Button className="all-btn" id="eight-btn" value="8" />

        <Button className="all-btn" id="nine-btn" value="9" />

        <Button className="orange-btn all-btn" id="multiply-btn" value="x" />

        <Button className="all-btn" id="four-btn" value="4" />

        <Button className="all-btn" id="five-btn" value="5" />

        <Button className="all-btn" id="six-btn" value="6" />

        <Button className="orange-btn all-btn" id="minus-btn" value="-" />

        <Button className="all-btn" id="one-btn" value="1" />

        <Button className="all-btn" id="two-btn" value="2" />

        <Button className="all-btn" id="three-btn" value="3" />

        <Button className="orange-btn all-btn" id="add-btn" value="+" />

        <Button className="all-btn" id="zero-btn" value="0" />

        <Button className="all-btn" id="dot-btn" value="·" />

        <Button className="orange-btn all-btn" id="equal-btn" value="=" />
      </div>
    </div>
  );
}

export default Calculator;
